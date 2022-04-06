import { createSlice, current } from "@reduxjs/toolkit";
import { elements } from "../data";
import { getFromLocalStorage, setToLocalStorage } from "../utils";

const setElementToLocalStore = setToLocalStorage('elements')

const getElementsState = () => {
  const _selectedElement = ['', '']
  const storedElements = getFromLocalStorage('elements');

  if (storedElements) {
    storedElements._isDropped = false
    storedElements._selectedElement = _selectedElement

    return storedElements
  }

  return {
    _isDropped: false,
    _selectedElement,
    elementsOfCanvas: [],
    all: Object
      .keys(elements.all)
      .reduce(
        (allElements, element) => {
          allElements[element] = {}

          return allElements
        },
        {}
      )
  }
}

/**
 * state schema: 
 * _selectedElement: [type, id]
 * elementsOfCanvas: Array<{type: string, id: string}>
 * all: {
 *  [type]: {
 *         [id]: elementInfoObject
 *    }
 * }
 */

const elementsSlice = createSlice({
  name: 'elements',
  initialState: getElementsState(),
  reducers: {
    toggleDrop(state) {
      state._isDropped = !state._isDropped
    },
    setSelectedElement(state, action) {
      const { type = '', id = '' } = action.payload
      state._selectedElement = [type, id];
    },
    dropElementToCanvas(state, action) {
      const { type, elementInfo } = action.payload
      const { id } = elementInfo.attrs

      state.elementsOfCanvas.push({ type, id })

      state.all[type][id] = {
        ...elementInfo
      }

      // update selected element 
      state._selectedElement = [type, id]

      // set the current state to local storage
      setElementToLocalStore(current(state))
    },
    editElement(state, action) {
      const { editProp, editValue } = action.payload
      const [type, editId] = state._selectedElement;

      const selectedElement = state.all[type][editId];
      selectedElement[editProp] = editValue;

      // set the current state to local storage
      setElementToLocalStore(state)
    },
    deleteElement(state) {
      const [type, deleteId] = state._selectedElement;

      delete state.all[type][deleteId]

      state.elementsOfCanvas = state.elementsOfCanvas.filter(({ id }) => id !== deleteId)

      // update selected element index
      state._selectedElement = ['', '']

      // set the current state to local storage
      setElementToLocalStore(state)
    }
  }
})

export const getIsDropped = ({ elements }) => elements._isDropped

export const getElementsOfCanvas = ({ elements }) => elements.elementOfCanvas;

/**
 * @param {Object} state 
 * @returns {[type, id]}
 */
export const getSelectedElement = ({ elements }) => elements._selectedElement;

export const getAllElements = ({ elements }) => elements.all;


// export the all actions
export const {
  toggleDrop,
  dropElementToCanvas,
  editElement,
  deleteElement
} = elementsSlice.actions

export default elementsSlice.reducer;