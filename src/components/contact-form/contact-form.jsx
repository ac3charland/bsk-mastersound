import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {API} from 'aws-amplify'
import {Redirect} from 'react-router-dom'

import Spinner from '../spinner/spinner'
import {API_NAME, CONTACT_ROUTE, CONTACT_SUCCESS_URL, GOOGLE_PRIVACY_POLICY, GOOGLE_TERMS} from '../../utils/constants'
import {validateEmail, validateRequiredString, validateName} from '../../utils/form-validation'
import './contact-form.scss'

const cb = 'form'

const ContactForm = ({subjectPrefill}) => {
    const [name, setName] = useState({value: '', isInvalid: false})
    const [email, setEmail] = useState({value: '', isInvalid: false})
    const [subject, setSubject] = useState({value: subjectPrefill ? subjectPrefill : '', isInvalid: false})
    const [message, setMessage] = useState({value: '', isInvalid: false})
    const [success, setSuccess] = useState(false)
    const [captchaError, setCaptchaError] = useState(false)
    const [otherError, setOtherError] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    const isFormValid = () => {
        const isNameValid = validateName(name.value)
        const isEmailValid = validateEmail(email.value)
        const isSubjectValid = validateRequiredString(subject.value)
        const isMessageValid = validateRequiredString(message.value)

        if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
            setName({...name, isInvalid: !isNameValid})
            setEmail({...email, isInvalid: !isEmailValid})
            setSubject({...subject, isInvalid: !isSubjectValid})
            setMessage({...message, isInvalid: !isMessageValid})
            return false
        }
        return true
    }

    const sendMessage = async token => {
        const body = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            token,
        }

        try {
            const res = await API.post(API_NAME, CONTACT_ROUTE, {body})
            setShowSpinner(false)
            if (res.msg === 'success') {
                setSuccess(true)
            }
            else if (res.msg === 'captcha failed') {
                setCaptchaError(true)
            }
            else {
                setOtherError(true)
            }
        }
        catch (err) {
            setShowSpinner(false)
            setOtherError(true)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (isFormValid()) {
            window.grecaptcha.ready(() => {
                setShowSpinner(true)
                setOtherError(false)
                setCaptchaError(false)
                window.grecaptcha.execute(process.env.REACT_APP_PUBLIC_KEY || '', {action: 'contact'})
                    .then((token) => {
                        sendMessage(token)
                    })
                    .catch((err) => {
                        setOtherError(true)
                        setShowSpinner(false)
                    })
            })
        }
    }

    if (success) {
        return <Redirect to={CONTACT_SUCCESS_URL} />
    }

    return (
        <div className={cb}>
            <form className={`${cb}__form`} onSubmit={handleSubmit} noValidate>
                <FormElement
                    idString={`${cb}__subject`}
                    title='Subject'
                    type='text'
                    value={subject.value}
                    changeHandler={(e) => setSubject({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={subject.isInvalid}
                    errorMsg='Please enter a subject.'
                />
                <FormElement
                    idString={`${cb}__name`}
                    title='Name'
                    type='text'
                    value={name.value}
                    changeHandler={(e) => setName({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={name.isInvalid}
                    errorMsg='Please enter a valid name.'
                />
                <FormElement
                    idString={`${cb}__email`}
                    title='Email'
                    type='email'
                    value={email.value}
                    changeHandler={(e) => setEmail({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={email.isInvalid}
                    errorMsg='Please enter a valid email.'
                />
                <FormElement
                    isTextArea
                    idString={`${cb}__message`}
                    title='Message'
                    type='text'
                    value={message.value}
                    changeHandler={(e) => setMessage({value: e.currentTarget.value, isInvalid: false})}
                    isInvalid={message.isInvalid}
                    errorMsg='Please enter a message.'
                />
                <div className={`${cb}__submit-wrapper`}>
                    <input className={`${cb}__submit`} type='submit' value='SEND MESSAGE' />
                    {showSpinner && <Spinner />}
                </div>
                <div className={`${cb}__captcha-terms`}>This site is protected by reCAPTCHA and the Google <a href={GOOGLE_PRIVACY_POLICY}>Privacy Policy</a> and <a href={GOOGLE_TERMS}>Terms of Service</a> apply.</div>
                {captchaError && <h3 className={`${cb}__error ${cb}__api-error-msg`}>Our reCaptcha has mistaken you for a bot. Don't worry: just try submitting again.</h3>}
                {otherError && <h3 className={`${cb}__error ${cb}__api-error-msg`}>An error occurred while sending your message. Please try again.</h3>}
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    subjectPrefill: PropTypes.string,
}

const FormElement = ({idString, title, type, value, changeHandler, isTextArea, isInvalid, errorMsg}) => {
    return (
        <div className={`${cb}__form-element`}>
            <label className={`${cb}__label`} htmlFor={idString}><strong>{title}</strong></label>
            {isTextArea ?
                <textarea
                    className={`${cb}__input`}
                    id={idString}
                    rows={4}
                    name={title}
                    value={value}
                    onChange={changeHandler}
                /> :
                <input
                    className={`${cb}__input`}
                    id={idString}
                    type={type}
                    name={title}
                    value={value}
                    onChange={changeHandler}
                />}
            {isInvalid && <h3 className={`${cb}__error ${idString}-error`}>{errorMsg}</h3>}
        </div>
    )
}

FormElement.propTypes = {
    idString: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isTextArea: PropTypes.bool,
    isInvalid: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    changeHandler: PropTypes.func,
}

export default ContactForm
