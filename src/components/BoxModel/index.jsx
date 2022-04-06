import shortid from "shortid";
import UnitBox from "../UnitBox";

const BoxModel = ({ title, values, changeHandler }) => (
  <div className="box-model">
    <div>
      <p className='style-label'>{title}</p>

      <div className="box-model__unit-box flex">
        {values.map(([subtitle, name, value]) => (
          <div className="box" key={shortid.generate()}>
            <p className='style-sub-label'>{subtitle}</p>
            <UnitBox
              name={name}
              value={value}
              changeHandler={changeHandler}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default BoxModel;