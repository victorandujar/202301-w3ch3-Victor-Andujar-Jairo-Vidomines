import Component from "../Component";
import { type Series } from "../../../types/types";
import series from "../../../series";
import { CardComponent } from "../CardComponent/CardComponent";
export class MainComponent extends Component {
  series: Series;

  constructor(parentElement: Element) {
    super(parentElement, "main-content", "main");
    this.series = series;
  }

  render() {
    super.render();

    this.element.innerHTML = `
      <h2 class="main-content__title">Series list</h2>
      <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <ul class="series">${this.series
          .map(() => '<li class="serie"></li>')
          .join("")}</ul>
    `;
    this.element
      .querySelectorAll(".serie")
      .forEach((serieCardContainer, position) => {
        const seriesList = new CardComponent(
          serieCardContainer,
          this.series[position]
        );
        seriesList.render();
      });
  }
}
