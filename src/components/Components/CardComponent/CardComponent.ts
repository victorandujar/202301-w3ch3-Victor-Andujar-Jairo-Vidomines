import Component from "../Component";
import { type ComponentStructure } from "../types";
import { type SeriesStructure } from "../../../types/types";

export class CardComponent extends Component implements ComponentStructure {
  serie: SeriesStructure;

  constructor(parentElement: Element, serie: SeriesStructure) {
    super(parentElement);
    this.serie = serie;

    super.render();

    this.element.innerHTML = `
            <img class="serie__poster"
              src="${this.serie.poster}"
              alt="${this.serie.name} poster" />
            <h4 class="serie__title">${this.serie.name}</h4>
            <span class="serie__info">${this.serie.creator} (${this.serie.year})</span>
            <ul class="score"></ul>`;
  }
}
