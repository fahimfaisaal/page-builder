import shortid from "shortid";
import Input from "../Input";
import Label from '../Label';
import './UnitBox.scss';

const UnitBox = ({ unit = "px", dataElementId, value, changeHandler, ...props }) => {
  const id = shortid.generate()

  return (
    <div className="unit-box">
      <Input dataElementId={dataElementId} id={id} type="number" classes="unit-box__value" value={value} onChange={changeHandler} {...props} />
      <Label htmlFor={id} classes="unit-box__unit" text={unit} />
    </div>
  )
}

export default UnitBox;