import shortid from "shortid";
import { elements } from "../data";

class Element {
  constructor(variant, attrs = {}) {
    const { tag, children } = elements.all[variant]
    this.variant = variant
    this.tag = tag
    this.attrs = {
      id: shortid.generate(),
      style: {
        backgroundColor: '',
        color: '',
        display: '',
        height: '',
        width: '',
        marginTop: '',
        marginRight: '',
        marginBottom: '',
        marginLeft: '',
        paddingTop: '',
        paddingRight: '',
        paddingBottom: '',
        paddingLeft: ''
      },
      ...attrs
    }
    this.children = children
  }
}

export default Element