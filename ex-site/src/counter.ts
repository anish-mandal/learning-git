export default function setupCounter(b: HTMLButtonElement) {
  let counter: number = 0;

  const setCounter = (num: number) => {
    counter = num;
    b.innerHTML = `${b.id} : ${counter}`;

    localStorage.setItem(`${b.id}`, String(counter));
  };

  b.addEventListener("click", () => setCounter(counter + 1));
  setCounter(Number(localStorage.getItem(`${b.id}`)));
}
