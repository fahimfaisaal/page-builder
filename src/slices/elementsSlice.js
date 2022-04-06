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
 * _isDropped: boolean
 * _selectedElement: [variant, id]
 * elementsOfCanvas: Array<string> format -> `${variant}.${id}`
 * all: {
 *  [variant]: {
 *         [id]: Element
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
      const { variant = '', id = '' } = action.payload
      state._selectedElement = [variant, id];
    },
    dropElementToCanvas(state, action) {
      const { variant, elementInfo } = action.payload
      const { id } = elementInfo.attrs

      state.elementsOfCanvas.push(`${variant}.${id}`)

      state.all[variant][id] = {
        ...elementInfo
      }

      // update selected element 
      state._selectedElement = [variant, id]

      // set the current state to local storage
      // Todo: uncomment this 
      setElementToLocalStore(current(state))
    },
    editElement(state, action) {
      const { editProp, editValue } = action.payload
      const [variant, editId] = state._selectedElement;

      const selectedElement = state.all[variant][editId];
      selectedElement[editProp] = editValue;

      console.log(current(selectedElement))

      // set the current state to local storage
      setElementToLocalStore(current(state))
    },
    deleteElement(state) {
      const [variant, deleteId] = state._selectedElement;

      delete state.all[variant][deleteId]

      state.elementsOfCanvas = state.elementsOfCanvas.filter((element) => {
        const [, id] = element.split('.')
        
        return id !== deleteId
      })

      // update selected element index
      state._selectedElement = ['', '']

      // set the current state to local storage
      // setElementToLocalStore(state)
    }
  }
})

export const getIsDropped = ({ elements }) => elements._isDropped

export const getElementsOfCanvas = ({ elements }) => elements.elementsOfCanvas;

/**
 * @param {Object} state 
 * @returns {[variant, id]}
 */
export const getSelectedElement = ({ elements }) => elements._selectedElement;

export const getAllElements = ({ elements }) => elements.all;


// export the all actions
export const {
  toggleDrop,
  setSelectedElement,
  dropElementToCanvas,
  editElement,
  deleteElement
} = elementsSlice.actions

export default elementsSlice.reducer;