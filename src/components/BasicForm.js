import useInput from "../hooks/useInput"

const BasicForm = (props) => {
	const {
		value: nameValue,
		blurHandler: nameBlur,
		hasError: nameError,
		isValid: nameValid,
		valueHandler: nameHandler,
		reset: nameReset,
	} = useInput((value) => value.trim() !== "")
	const {
		value: emailValue,
		blurHandler: emailBlur,
		hasError: emailError,
		isValid: emailValid,
		valueHandler: emailHandler,
		reset: emailReset,
	} = useInput((value) => {
		if (/.+@.+\.[A-Za-z]+$/.test(value)) {
			return true
		} else {
			return false
		}
	})
	const {
		value: lastNameValue,
		blurHandler: lastNameBlur,
		hasError: lastNameError,
		isValid: lastNameValid,
		valueHandler: lastNameHandler,
		reset: lastNameReset,
	} = useInput((value) => value.trim() !== "")

	const formValid = nameValid && lastNameValid && emailValid ? true : false

	const submitHandler = (e) => {
		e.preventDefault()
		nameReset()
		lastNameReset()
		emailReset()
	}

	const emailClasses = emailError ? "form-control invalid" : "form-control"
	const nameClasses = nameError ? "form-control invalid" : "form-control"
	const lastNameClasses = lastNameError
		? "form-control invalid"
		: "form-control"

	return (
		<form onSubmit={submitHandler}>
			<div className="control-group">
				<div className={nameClasses}>
					<label htmlFor="name">First Name</label>
					<input
						value={nameValue}
						onChange={nameHandler}
						onBlur={nameBlur}
						type="text"
						id="name"
					/>
					{nameError && (
						<p className="error-text">
							First name must not be empty
						</p>
					)}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="lastName">Last Name</label>
					<input
						value={lastNameValue}
						onChange={lastNameHandler}
						onBlur={lastNameBlur}
						type="text"
						id="lastName"
					/>
					{lastNameError && (
						<p className="error-text">
							Last name must not be empty
						</p>
					)}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="email">E-Mail Address</label>
				<input
					value={emailValue}
					onChange={emailHandler}
					onBlur={emailBlur}
					type="email"
					id="email"
				/>
			</div>
			{emailError && <p className="error-text">Email must be valid</p>}
			<div className="form-actions">
				<button disabled={!formValid}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
