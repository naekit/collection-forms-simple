import { useEffect, useState } from "react"

const SimpleInput = (props) => {
	// const nameRef = useRef()
	// const formRef = useRef()
	const [name, setName] = useState("")
	const [isValid, setIsValid] = useState(false)
	const [isTouched, setIsTouched] = useState(false)

	useEffect(() => {
		if (isValid) {
			console.log("is valid")
		}
	}, [isValid])

	const nameHandler = (e) => {
		e.preventDefault()
		setName(e.target.value)
		setIsValid(true)
		if (e.target.value.trim() !== "") {
			setIsValid(true)
		}
		if (e.target.value.trim() === "") {
			setIsValid(false)
		}
	}

	const blurHandler = (e) => {
		e.preventDefault()
		setIsTouched(true)
		if (name.trim() === "") {
			setIsValid(false)
		}
	}

	const formHandler = (e) => {
		e.preventDefault()
		setIsTouched(true)
		// const enteredName = nameRef.current.value
		// formRef.current.reset()
		if (name.trim() === "") {
			setIsValid(false)
			return
		}
		setIsValid(true)
		setName("")
		// console.log(name)
		// console.log(enteredName)
	}

	const isInvalid = !isValid && isTouched

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
				<button>Submit</button>
			</div>
		</form>
	)
}

export default SimpleInput
