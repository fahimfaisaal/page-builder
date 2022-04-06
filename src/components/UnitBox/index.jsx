import shortid from "shortid";
import Input from "../Input";
import Label from '../Label';
import './UnitBox.scss';

const UnitBox = ({ unit = "px", value, changeHandler, ...props }) => {
  const id = shortid.generate()

  return (
    <div className="unit-box">
      <Input id={id} dataunit={unit} type="number" classes="unit-box__value" value={value.replace(/\D/g, '')} changeHandler={changeHandler} {...props} />
      <Label htmlFor={id} classes="unit-box__unit" text={unit} />
    </div>
  )
}

export default UnitBox;