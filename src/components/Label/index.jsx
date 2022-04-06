import { addClass } from "../../utils"

const Label = ({ text, classes, htmlFor }) => (
  <label className={addClass(classes, 'label')} htmlFor={htmlFor}>{text}</label>
)

export default Label