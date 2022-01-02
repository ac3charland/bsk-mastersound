/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var nodemailer = require('nodemailer')
var Axios = require('axios')

const transport = {
  host: process.env.HANDLER_HOST,
  auth: {
    user: process.env.HANDLER_EMAIL,
    pass: process.env.EMAIL_PASS,
  },
}
const transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  }
  else {
    console.log('server is ready to take messages')
  }
})

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})


app.post('/contact', function (req, res) {
  const {name, email, subject, message, token} = req.body
  const secret = process.env.SECRET
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  const mail = {
    from: process.env.HANDLER_EMAIL,
    replyTo: email,
    to: process.env.CONTACT_RECEIPT_EMAIL,
    subject,
    text: `From ${name}: ${message}`,
  }

  Axios.post(verifyUrl).then(captchaRes => {
    const {score, success} = captchaRes.data
    if (!success || score < 0.5) {
      res.json({msg: 'captcha failed', url: verifyUrl, body: req.body, res: captchaRes.data})
    }
    else {
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: err,
          })
        }
        else {
          res.json({
            msg: 'success',
          })
        }
      })
    }
  })
    .catch(err => {
      res.json({
        msg: 'There was an error getting a captcha response',
        err,
        verifyUrl,
        envs: {
          handlerEmail: process.env.HANDLER_EMAIL,
          contactReceiptEmail: process.env.CONTACT_RECEIPT_EMAIL,
          secret: process.env.SECRET,
        },
      })
    })
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
