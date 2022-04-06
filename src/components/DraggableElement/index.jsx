import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../assets/icons/icons'
import { dropElementToCanvas, getIsDropped } from '../../slices/elementsSlice'
import './DraggableElement.scss'
import Element from '../../models/Element'

export default function DraggableElement({ variant, text }) {
  const isDropped = useSelector(getIsDropped)
  const dispatch = useDispatch()

  const dragEndHandler = (e) => {
    if (isDropped) {
      const variant = e.target.id
      const newElement = new Element(variant)

      dispatch(dropElementToCanvas({
        variant,
        elementInfo: newElement
      }))
    }
  }

  return (
    <div id={variant} draggable="true" className='element' onDragEnd={dragEndHandler}>
      <div className="element__icon">
        <img style={{pointerEvents: 'none'}} src={icons[variant]} alt={variant} />
      </div> 
      <span className='element__title'>{text}</span>
    </div>
  )
}
 