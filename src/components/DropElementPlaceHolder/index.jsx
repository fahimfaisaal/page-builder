import { addClass } from '../../utils';
import './DropElementPlaceHolder.scss';

const DropElementPlaceHolder = ({ classes, placeholder }) => (
  <div className={addClass(classes, 'placeholder')}>
    <h4 className='placeholder__text'>{placeholder}</h4>
  </div>
)

export default DropElementPlaceHolder;