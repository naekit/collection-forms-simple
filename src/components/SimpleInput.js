import useInput from "../hooks/useInput"

const SimpleInput = (props) => {
	const {
		value: nameValue,
		hasError: nameError,
		valueHandler: nameHandler,
		blurHandler: nameBlur,
		isValid: nameValid,
		reset: nameReset,
	} = useInput((value) => value.trim() !== "")

	const {
		value: emailValue,
		hasError: emailError,
		valueHandler: emailHandler,
		blurHandler: emailBlur,
		isValid: emailValid,
		reset: emailReset,
	} = useInput((value) => {
		if (/.+@.+\.[A-Za-z]+$/.test(value)) {
			return true
		} else {
			return false
		}
	})

	const formIsValid = nameValid && emailValid ? true : false

	const formHandler = (e) => {
		e.preventDefault()
		if (!nameValid || !emailValid) {
			return
		}
		nameReset()
		emailReset()
	}

	const formNameClasses = nameError ? "form-control invalid" : "form-control"
	const formEmailClasses = emailError
		? "form-control invalid"
		: "form-control"

	return (
		<form onSubmit={formHandler}>
			<div className={formNameClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					value={nameValue}
					type="text"
					id="name"
					onChange={nameHandler}
					onBlur={nameBlur}
				/>
				{nameError && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className={formEmailClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					value={emailValue}
					type="email"
					id="email"
					onChange={emailHandler}
					onBlur={emailBlur}
				/>
				{emailError && <p className="error-text">Enter valid email</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
