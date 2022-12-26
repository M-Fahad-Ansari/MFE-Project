import { Component, createApp } from "vue";

export default function placeVueComponent(component: Component, element: HTMLElement) {
  createApp(component).mount(element);
}
