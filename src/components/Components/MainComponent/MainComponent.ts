import Component from "../Component";

export class MainComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-content", "main");
  }

  render() {
    super.render();

    this.element.innerHTML = `
      <h2 class="main-content__title">Series list</h2>
      <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
    `;
  }
}
