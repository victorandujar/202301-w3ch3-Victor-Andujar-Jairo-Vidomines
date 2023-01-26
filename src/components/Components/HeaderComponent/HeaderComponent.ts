import Component from "../Component";

export class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-header", "header");
  }

  render() {
    super.render();

    this.element.innerHTML = ` <h1 class="main-title">My Series</h1> `;

    
  }
}
