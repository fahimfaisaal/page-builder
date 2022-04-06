import { createElement, useState } from "react";
import { useDispatch } from "react-redux";
import { editElement, setSelectedElement } from "../../slices/elementsSlice";

const CanvasElement = ({ variant, tag, attrs, children }) => {
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch()

  const focusHandler = (e) => {
    const variant = e.target.getAttribute('variant');
    const id = e.target.id

    dispatch(setSelectedElement({ variant, id }))

  }

  const blurHandler = (e) => {
    dispatch(editElement({ editProp: 'children', editValue: e.target.innerText}))

    setEditable(false)
  }

  const clickHandler = () => {
    setEditable(true)
  }
  
  const modifiedAttrs = {
    ...attrs,
    type: variant === 'button' ? variant : null,
    variant: variant,
    role: 'textbox',
    contentEditable: editable,
    children,
    className: 'canvas-element',
    style: Object
      .keys(attrs?.style || {})
      .reduce(
        (acc, cur) => {
          if (attrs.style[cur]) {
            acc[cur] = attrs.style[cur]
          }

          return acc
        },
        {}
    ),
    onClick: clickHandler,
    onFocus: focusHandler,
    onBlur: blurHandler
  }

  return createElement(tag, modifiedAttrs, children)
}

export default CanvasElement