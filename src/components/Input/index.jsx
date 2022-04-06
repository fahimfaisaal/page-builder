import { useEffect, useState } from "react";
import { addClass, debounce } from "../../utils";
import './Input.scss';

const Input = ({ variant = 'text', classes, value, changeHandler, ...props }) => {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value)
  }, [value])

  const innerChangeHandler = (e) => {
    setInnerValue(e.target.value)

    debounce(changeHandler.bind(null, e), 350)
  }
  
  return (
    <input
      variant={variant}
      value={innerValue}
      onChange={innerChangeHandler}
      className={addClass(classes, 'input')}
      {...props}
    />
  )
}

export default Input;