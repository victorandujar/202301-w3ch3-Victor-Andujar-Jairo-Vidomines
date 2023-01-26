import Component from "../Components/Component";

export class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();

    this.element.innerHTML = `
    <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>`;
  }
}
