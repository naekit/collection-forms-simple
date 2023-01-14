import { useReducer } from "react"

const initialState = {
	value: "",
	isTouched: false,
}

const inputReducer = (state, action) => {
	if (action.type === "INPUT") {
		return { value: action.value, isTouched: state.isTouched }
	}
	if (action.type === "BLUR") {
		return { value: state.value, isTouched: true }
	}
	if (action.type === "RESET") {
		return initialState
	}
	return initialState
}

const useInput = (validateVal) => {
	const [inputState, dispatch] = useReducer(inputReducer, initialState)

	const valueIsValid = validateVal(inputState.value)
	const hasError = !valueIsValid && inputState.isTouched

	const valueHandler = (e) => {
		dispatch({ type: "INPUT", value: e.target.value })
	}

	const blurHandler = (e) => {
		dispatch({ type: "BLUR" })
	}

	const reset = () => {
		dispatch({ type: "RESET" })
	}

	return {
		value: inputState.value,
		hasError,
		valueHandler,
		blurHandler,
		isValid: valueIsValid,
		reset,
	}
}

export default useInput
