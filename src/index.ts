import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";

const container = document.querySelector(".container")!;

const header = new HeaderComponent(container);

header.render();
