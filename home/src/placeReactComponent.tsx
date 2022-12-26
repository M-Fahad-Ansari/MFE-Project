import React from "react";
import ReactDOM from "react-dom";

export default function mount(Component: () => JSX.Element, el: HTMLElement | null) {
  ReactDOM.render(<Component />, el);
}
