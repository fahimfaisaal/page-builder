import { createElement } from "react";

const CanvasElement = ({ tag, attrs, children }) => {
  attrs.style = Object
    .keys(attrs.style)
    .reduce(
      (acc, cur) => {
        if (attrs.style[cur]) {
          acc[cur] = attrs.style[cur]
        }

        return acc
      },
      {}
    )

  return createElement(tag, attrs, children)
}

export default CanvasElement