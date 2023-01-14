import { useState, useReducer } from "react"

const useInput = (validateVal) => {
	const [value, setValue] = useState("")
	const [isTouched, setIsTouched] = useState("")

	const valueIsValid = validateVal(value)
	const hasError = !valueIsValid && isTouched

	const valueHandler = (e) => {
		setValue(e.target.value)
	}

	const blurHandler = (e) => {
		setIsTouched(true)
	}

	const reset = () => {
		setValue("")
		setIsTouched(false)
	}

	return {
		value,
		hasError,
		valueHandler,
		blurHandler,
		isValid: valueIsValid,
		reset,
	}
}

export default useInput
