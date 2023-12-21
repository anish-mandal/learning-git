import setupCounter from "./counter";
import "./style.css";

document.getElementById("app")!.innerHTML = `
  <div class="flex">
    <span>Hello, World!</span>

    <div>
      <button id="like"></button>
      <button id="dislike"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#like")!);
setupCounter(document.querySelector<HTMLButtonElement>("#dislike")!);
