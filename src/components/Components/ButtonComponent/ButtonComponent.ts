import Component from "../Component";
import { type ComponentStructure } from "../types";

export class ButtonComponent extends Component implements ComponentStructure {
  constructor(parentElement: Element) {
    super(parentElement);
    super.render();

    this.element.innerHTML = `<li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>`;
  }
}
