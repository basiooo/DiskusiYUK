import { useState } from "react"

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue)

  function handleValueChange({ target }) {
    let value = target.value
    if (target.value === undefined) {
      value = target
    }
    setValue(value)
  }

  return [value, handleValueChange, setValue]
}

export default useInput
