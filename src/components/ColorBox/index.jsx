import shortid from "shortid";
import Input from "../Input";
import Label from "../Label";
import './ColorBox.scss';

const ColorBox = ({ name, value = "#000000", changeHandler }) => {
  const id = shortid.generate()

  return (
    <div className="color-box">
      <Input name={name} id={id} classes="color-box__input" type="color" value={value} onChange={changeHandler} />
      <Label classes="color-box__value" htmlFor={id} text={value.substring(1).toUpperCase() || "000000"} />
    </div>
  )
}

export default ColorBox;