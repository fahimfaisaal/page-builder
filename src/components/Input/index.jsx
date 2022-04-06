import { addClass } from "../../utils";
import './Input.scss';

const Input = ({ type = 'text', classes, initialValue = '', ...props }) => (
  <input
    type={type}
    value={initialValue}
    className={addClass(classes, 'input')}
    {...props}
  />
)

export default Input;