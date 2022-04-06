import { useDispatch, useSelector } from 'react-redux';
import { editElement, getAllElements, getSelectedElement } from '../../slices/elementsSlice';
import BoxModel from '../BoxModel';
import ColorBox from '../ColorBox';
import Divider from '../Divider';
import Select from '../Select/Select';
import UnitBox from '../UnitBox';
import './Editor.scss';

const Editor = () => {
  const allElements = useSelector(getAllElements)
  const [selectedType, elementId] = useSelector(getSelectedElement)
  const selectedElement = allElements[selectedType][elementId]
  const { attrs } = selectedElement;
  const {
    backgroundColor,
    color,
    display,
    height,
    width,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  } = attrs.style


  const dispatch = useDispatch()

  const changeHandler = (e) => {
    const { value, name } = e.target;
    console.log(name, value)

    const isButton = new Set(['submit', 'button', 'reset'])
    let newAttrs 

    if (name === 'type' && isButton.has(value)) {
      newAttrs = {
        ...attrs,
        [name]: value
      }
    } else {
      newAttrs = {
        ...attrs,
        style: {
          ...attrs.style,
          [name]: value + (e.target.getAttribute('dataunit') || '')
        }
      }
    }

    dispatch(editElement({ editProp: 'attrs', editValue: newAttrs }))
  }

  return (
    <aside className='app__editor'>
      <h2 className='app__editor-heading'>Style</h2>
      <Divider />

      <div className="app__editor--default-styles">
        <div className="colors">
          <div className="background-color flex">
            <p className='style-label'>Background Color</p>
            <ColorBox
              name="backgroundColor"
              value={backgroundColor}
              changeHandler={changeHandler} // Todo must add handler
            />
          </div>
          <div className="color flex">
            <p className='style-label'>Color</p>
            <ColorBox
              name="color"
              value={color}
              changeHandler={changeHandler} // Todo must add handler
            />
          </div>
        </div>
        <Divider />

        <div className="display flex">
          <p className='style-label'>Display</p>
          <Select
            name="display"
            selectedValue={display}
            values={['block', 'inline-block', 'inline']}
            changeHandler={changeHandler} // Todo must add handler
          />
        </div>
        <Divider />

        <div className="area">
          <div className="height flex">
            <p className='style-label'>Height</p>
            <UnitBox
              name="height"
              value={height}
              changeHandler={changeHandler}
            />
          </div>
          <div className="width flex">
            <p className='style-label'>Width</p>
            <UnitBox
              name="width"
              value={width}
              changeHandler={changeHandler}
            />
          </div>
        </div>
        <Divider />

        <BoxModel
          title="Margin"
          values={[
            ["Top", "marginTop", marginTop],
            ["Right", "marginRight", marginRight],
            ["Bottom", "marginBottom", marginBottom],
            ["Left", "marginLeft", marginLeft],
          ]}
          changeHandler={changeHandler}
        />

        <BoxModel
          title="Padding"
          values={[
            ["Top", "paddingTop", paddingTop],
            ["Right", "paddingRight", paddingRight],
            ["Bottom", "paddingBottom", paddingBottom],
            ["Left", "paddingLeft", paddingLeft],
          ]}
          changeHandler={changeHandler}
        />
      </div>

      <Divider />
      <div className="app__editor--custom-styles">
        {selectedType === 'button' && (
          <div className="display flex">
            <p className='style-label'>Type</p>
            <Select
              name="type"
              selectedValue={attrs.type}
              values={['button', 'submit', 'reset']}
              changeHandler={changeHandler} // Todo must add handler
            />
          </div>
        )}
      </div>
    </aside>
  )
}

export default Editor;