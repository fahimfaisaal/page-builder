import { useDispatch, useSelector } from "react-redux";
import { getIsDropped, toggleDrop } from '../../slices/elementsSlice';
import DropElementPlaceHolder from "../DropElementPlaceHolder";
import './Canvas.scss';

const Canvas = () => {
  const isDropped = useSelector(getIsDropped)
  const dispatch = useDispatch();

  const enterLeaveHandler = () => dispatch(toggleDrop())
  const dragLeaveHandler = () => {
    setTimeout(() => dispatch(toggleDrop()), 10)
  }
    
  return (
    <div
      className='app__canvas'
      onDragEnter={enterLeaveHandler}
      onDragLeave={dragLeaveHandler}
    >

      <DropElementPlaceHolder
        classes={isDropped ? 'dropping' : ''}
        placeholder='Drop Elements Here'
      />
    </div>
  )
}

export default Canvas;