import { HeaderComponent } from "./components/Components/HeaderComponent/HeaderComponent";
import { MainComponent } from "./components/Components/MainComponent/MainComponent";

const container = document.querySelector(".container")!;
const header = new HeaderComponent(container);
header.render();

const main = new MainComponent(container);
main.render();
