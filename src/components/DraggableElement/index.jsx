import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../assets/icons/icons'
import { dropElementToCanvas, getIsDropped } from '../../slices/elementsSlice'
import './DraggableElement.scss'
import Element from '../../models/Element'
import { elements } from '../../data'

export default function DraggableElement({ type, text }) {
  const isDropped = useSelector(getIsDropped)
  const dispatch = useDispatch()

  const dragEndHandler = (e) => {
    if (isDropped) {
      const type = e.target.id
      const tag = elements[type];
      const newElement = new Element(tag)

      dispatch(dropElementToCanvas({
        type,
        elementInfo: newElement
      }))
    }
  }

  return (
    <div id={type} draggable="true" className='element' onDragEnd={dragEndHandler}>
      <div className="element__icon">
        <img style={{pointerEvents: 'none'}} src={icons[type]} alt={type} />
      </div> 
      <span className='element__title'>{text}</span>
    </div>
  )
}
 