const navigationButtonClass = "navigation__button";
const navigationButtons = document.getElementsByClassName(
  navigationButtonClass
);

class NavigationSection {
  name: string;
  buttonTitle: string;
  htmlElement: HTMLElement;
  constructor(name: string, buttonTitle: string) {
    const newElement = document.createElement("div");
    this.name = name;
    this.buttonTitle = buttonTitle;
    this.htmlElement = newElement;
  }
  createGameSection() {
    this.htmlElement.id = "app";
    const script = this.htmlElement.appendChild(
      document.createElement("script") as Node
    ) as HTMLScriptElement;
    script.src = "src/Game/game.ts";
    script.type = "module";
    return this;
  }
  createParagraph() {
    this.htmlElement = document.createElement("p");
    this.htmlElement.innerText = "Hello";
    return this;
  }
}

const gameSection = new NavigationSection(
  "Game",
  "Якась гра"
).createGameSection();
const anthemSection = new NavigationSection(
  "Anthem",
  "Державний Гімн України"
).createParagraph();

for (let i = 0; i < navigationButtons.length; i++) {
  const NavigationSection = [gameSection, anthemSection];
  const button = navigationButtons[i];
  button.textContent = NavigationSection[i].buttonTitle;
  button.addEventListener("click", function (this: typeof button) {
    const activeButtonClass = "navigation__button--current";
    if (this.classList.contains(activeButtonClass)) return;
    const currentButton = document.getElementsByClassName(activeButtonClass);
    currentButton[0].classList.remove(activeButtonClass);
    this.classList.add(activeButtonClass);
    let newSection: HTMLElement;
    switch (this.textContent) {
      case gameSection.buttonTitle:
        newSection = gameSection.htmlElement;
        break;
      case anthemSection.buttonTitle:
        newSection = anthemSection.htmlElement;
        break;
      default:
        break;
    }
    const content = document.getElementsByClassName("content")[0];
    content.innerHTML = "";
    content.appendChild(newSection);
  });
}

export {};
