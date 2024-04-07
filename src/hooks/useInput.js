import { useState } from "react"

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue)

  function handleValueChange({ target }) {
    const value = target.value || target
    setValue(value)
  }

  return [value, handleValueChange, setValue]
}

export default useInput
