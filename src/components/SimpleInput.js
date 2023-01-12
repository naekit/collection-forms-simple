import { useEffect, useState } from "react"

const SimpleInput = (props) => {
	const [name, setName] = useState("")
	const [isTouched, setIsTouched] = useState(false)
	const [formIsValid, setFormIsValid] = useState(false)

	const isValid = name.trim() !== ""
	const isInvalid = !isValid && isTouched

	useEffect(() => {
		if (isValid) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [isValid])

	const nameHandler = (e) => {
		setName(e.target.value)
	}

	const blurHandler = (e) => {
		setIsTouched(true)
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
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
