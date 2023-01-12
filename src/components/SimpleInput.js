import { useRef, useState } from "react"

const SimpleInput = (props) => {
	const nameRef = useRef()
	const formRef = useRef()
	const [name, setName] = useState("")
	const [isValid, setIsValid] = useState(true)

	const nameHandler = (e) => {
		e.preventDefault()
		setIsValid(true)
		setName(e.target.value)
	}

	const formHandler = (e) => {
		e.preventDefault()
		const enteredName = nameRef.current.value
		// formRef.current.reset()
		if (name.trim() === "") {
			setIsValid(false)
			return
		}
		setIsValid(true)
		setName("")
		console.log(name)
		console.log(enteredName)
	}

	const formClasses = isValid ? "form-control" : "form-control invalid"

	return (
		<form ref={formRef} onSubmit={formHandler}>
			<div className={formClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					value={name}
					ref={nameRef}
					type="text"
					id="name"
					onChange={nameHandler}
				/>
				{!isValid && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
