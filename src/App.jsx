import { useSelector } from 'react-redux';
import './App.scss';
import Canvas from './components/Canvas';
// TODO: Next styles implement the styles component
import Editor from './components/Editor/';
import DraggableElement from './components/DraggableElements';
import { elements } from './data/';
import { getSelectedElement } from './slices/elementsSlice';
import { addClass } from './utils';

// app--editor
function App() {
  const [selectedType] = useSelector(getSelectedElement)

  return (
    <main className={addClass(selectedType && 'app--editor', 'app')}> 
        <DraggableElement {...elements} />
        <Canvas />
      {selectedType && <Editor />}
    </main>
  );
}

export default App;
