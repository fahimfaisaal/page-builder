import shortid from "shortid";
import './Select.scss';

const Select = ({ name, selectedValue, values, changeHandler }) => (
  <select className="select-element" name={name} onChange={changeHandler}>
    {values.map(value => (
      <option
        key={shortid.generate()}
        selected={selectedValue === value}
        value={value}
      >
        {value}
      </option>
    ))}
  </select>
)

export default Select;