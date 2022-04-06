import { useDispatch, useSelector } from 'react-redux';
import { getAllElements, getSelectedElement } from '../../slices/elementsSlice';
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
  } = attrs.style

  const dispatch = useDispatch()

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
              onChange={null} // Todo must add handler
            />
          </div>
          <div className="color flex">
            <p className='style-label'>Color</p>
            <ColorBox
              name="color"
              value={color}
              onChange={null} // Todo must add handler
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
            selectHandler={null} // Todo must add handler
          />
        </div>
        <Divider />

        <div className="area">
          <div className="height flex">
            <p className='style-label'>Height</p>
            <UnitBox
              name="height"
              value={height}
              changeHandler={null} // Todo must add handler 
            />
          </div>
          <div className="width flex">
            <p className='style-label'>Width</p>
            <UnitBox
              name="width"
              value={width}
              changeHandler={null} // Todo must add handler 
            />
          </div>
        </div>
        <Divider />

        <div className="box-model">
          <div className="margin">
            <p className='style-label'>Margin</p>

            <div className="box-model__unit-box flex">
              <div className="box">
                <p className='style-sub-label'>Top</p>
                <UnitBox
                  name="marginTop"
                  value={marginTop}
                  changeHandler={null} // Todo must add handler 
                />
              </div>
              <div className="box">
                <p className='style-sub-label'>Right</p>
                <UnitBox
                  name="marginRight"
                  value={marginRight}
                  changeHandler={null} // Todo must add handler 
                />
              </div>
              <div className="box">
                <p className='style-sub-label'>Bottom</p>
                <UnitBox
                  name="marginBottom"
                  value={marginBottom}
                  changeHandler={null} // Todo must add handler 
                />
              </div>
              <div className="box">
                <p className='style-sub-label'>Left</p>
                <UnitBox
                  name="marginLeft"
                  value={marginLeft}
                  changeHandler={null} // Todo must add handler 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />
      <div className="app__editor--custom-styles">
      </div>
    </aside>
  )
}

export default Editor;