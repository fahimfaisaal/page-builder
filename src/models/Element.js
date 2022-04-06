import shortid from "shortid";

class Element {
  constructor(tag, attrs, children = []) {
    this.tag = tag;
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

    return Object.seal(this)
  }
}

export default Element