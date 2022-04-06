import shortid from 'shortid'
import { capitalize } from '../../utils'
import DraggableElement from '../DraggableElement'

const Elements = ({ title, all }) => (
  <aside className='app__elements'>
    <h3>{title}</h3>
    <div className='app__elements-container'>
      {Object.keys(all).map((elmType) => (
        <DraggableElement
          key={shortid.generate()}
          variant={elmType}
          text={capitalize(elmType)}
        />
      ))}
    </div>
  </aside>
)

export default Elements