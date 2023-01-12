import { useEffect, useState } from "react"

const SimpleInput = (props) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [isTouched, setIsTouched] = useState(false)
	const [isTouchedEmail, setIsTouchedEmail] = useState(false)

	const isValid = name.trim() !== ""
	let isEmailValid = false
	if (/.+@.+\.[A-Za-z]+$/.test(email)) {
		isEmailValid = true
	}

	const isInvalid = !isValid && isTouched
	const isEmailInvalid = !isEmailValid && isTouchedEmail

	const formIsValid = isValid && isEmailValid ? true : false

	const nameHandler = (e) => {
		setName(e.target.value)
	}
	const emailHandler = (e) => {
		setEmail(e.target.value)
	}

	const blurHandler = (e) => {
		setIsTouched(true)
	}
	const emailBlur = (e) => {
		setIsTouchedEmail(true)
	}

	const formHandler = (e) => {
		e.preventDefault()
		setIsTouched(true)
		if (!isValid) {
			return
		}
		setName("")
		setIsTouched(false)
	}

	const formClasses = isInvalid ? "form-control invalid" : "form-control"
	const formEmailClasses = isEmailInvalid
		? "form-control invalid"
		: "form-control"

	return (
		<form onSubmit={formHandler}>
			<div className={formClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					value={name}
					type="text"
					id="name"
					onChange={nameHandler}
					onBlur={blurHandler}
				/>
				{isInvalid && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className={formEmailClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					value={email}
					type="email"
					id="email"
					onChange={emailHandler}
					onBlur={emailBlur}
				/>
				{isEmailInvalid && (
					<p className="error-text">Enter valid email</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
