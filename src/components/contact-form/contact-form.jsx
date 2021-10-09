import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './contact-form.scss'

const cb = 'contact-form'

const ContactForm = ({subjectPrefill}) => {
    const [name, setName] = useState({value: '', isInvalid: false})
    const [email, setEmail] = useState({value: '', isInvalid: false})
    const [subject, setSubject] = useState({value: subjectPrefill ? subjectPrefill : '', isInvalid: false})
    const [message, setMessage] = useState({value: '', isInvalid: false})

    return (
        <div className={cb}>
            <form onSubmit={e => e.preventDefault()}>
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
                </div>
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
