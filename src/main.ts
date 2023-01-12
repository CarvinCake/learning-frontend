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
  createAboutSection() {
    this.htmlElement.setAttribute("class", "mono-paragraph");
    this.htmlElement.innerText = "Зробив цей сайт";
    return this;
  }
  createEmptySection() {
    // this.htmlElement.id = "app";
    // const script = this.htmlElement.appendChild(
    //   document.createElement("script") as Node
    // ) as HTMLScriptElement;
    // script.src = "src/Game/game.ts";
    // script.type = "module";
    return this;
  }
  createParagraph() {
    const anthemText = `
    <h2>НАЦІОНАЛЬНИЙ ГІМН УКРАЇНИ</h1><br />
    <h4>(Оригінальний вірш Павла Чубинського)</h4><br />
      <p class="mono-paragraph" id="poem">
        <br />
        Ще не вмерла Україна, і слава, і воля,<br />
        Ще нам, браття молодії, усміхнеться доля.<br />
        Згинуть наші вороженьки, як роса на сонці,<br />
        Запануєм і ми, браття, у своїй сторонці.<br />
        <br />
        Душу, тіло ми положим за нашу свободу.<br />
        І покажем, що ми, браття, козацького роду.<br />
        <br />
        Станем, браття, в бій кровавий від Сяну до Дону<br />
        В ріднім краю панувати не дамо нікому;<br />
        Чорне море ще всміхнеться, дід Дніпро зрадіє,<br />
        Ще у нашій Україні доленька наспіє.<br />
        <br />
        А завзяття, праця щира свого ще докаже,<br />
        Ще ся волі в Україні піснь гучна розляже,<br />
        За Карпати відоб'ється, згомонить степами,<br />
        України слава стане поміж народами.<br />
      </p>
    `;
    this.htmlElement = document.createElement("div");
    this.htmlElement.innerHTML = anthemText;
    return this;
  }
}

const aboutSection = new NavigationSection(
  "About",
  "Щось про мене"
).createAboutSection();
const anthemSection = new NavigationSection(
  "Anthem",
  "Державний Гімн України"
).createParagraph();
const emptySection = new NavigationSection(
  "Empty",
  "Пусте"
).createEmptySection();

for (let i = 0; i < navigationButtons.length; i++) {
  const NavigationSection = [aboutSection, anthemSection, emptySection];
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
      case aboutSection.buttonTitle:
        newSection = aboutSection.htmlElement;
        break;
      case anthemSection.buttonTitle:
        newSection = anthemSection.htmlElement;
        break;
      case emptySection.buttonTitle:
        newSection = emptySection.htmlElement;
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
