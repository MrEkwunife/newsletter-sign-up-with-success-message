import "./style.css";
import Illustration from "./component/Illustration";
import FormContainer from "./component/FormContainer";

export default function Main() {
  const app = document.querySelector<HTMLElement>("#app");
  if (!app) return;

  const section = document.createElement("section");
  section.className = "newsletter";

  section.innerHTML = Illustration();
  section.appendChild(FormContainer());

  app.innerHTML = "";
  app.appendChild(section);
}

Main();
