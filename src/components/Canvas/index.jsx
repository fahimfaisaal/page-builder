import { useDispatch, useSelector } from "react-redux";
import { getAllElements, getElementsOfCanvas, getIsDropped, toggleDrop } from '../../slices/elementsSlice';
import { addClass } from "../../utils";
import CanvasElement from '../CanvasElement';
import DropElementPlaceHolder from "../DropElementPlaceHolder";
import './Canvas.scss';

const Canvas = () => {
  const isDropped = useSelector(getIsDropped)
  const canvasElements = useSelector(getElementsOfCanvas)
  const canvasLength = canvasElements.length
  const allElements = useSelector(getAllElements)
  const dispatch = useDispatch();

  const enterLeaveHandler = () => dispatch(toggleDrop())
  const dragLeaveHandler = () => {
    setTimeout(() => dispatch(toggleDrop()), 15)
  }

  return (
    <div
      className={addClass(!canvasLength && 'empty-canvas', 'app__canvas')}
      onDragEnter={enterLeaveHandler}
      onDragLeave={dragLeaveHandler}
    >
      {canvasLength ? (
        canvasElements.map((element) => {
          const [variant, id] = element.split('.')
          const elementObject = allElements[variant][id]

          return <CanvasElement key={id} {...elementObject} />
        })
      ) : (
        <DropElementPlaceHolder
          classes={isDropped ? 'dropping' : ''}
          placeholder='Drop Elements Here'
        /> 
      )}
    </div>
  )
}

export default Canvas;