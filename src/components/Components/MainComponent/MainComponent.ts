import Component from "../Component";

export class MainComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-content", "main");
  }

  render() {
    super.render();

    this.element.innerHTML = `
      <h2 class="main-content__title">Series list</h2>
    `;
  }
}
