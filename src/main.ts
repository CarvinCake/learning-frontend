const navigationButtonClass = "navigation__button";
const navigationButtons = document.getElementsByClassName(navigationButtonClass);

type NavigationSection =
	{
		title: string;
		name: string;
		innerHTML: string;
	}


for (let i = 0; i < navigationButtons.length; i++){
	const button = navigationButtons[i];
	button.addEventListener("click", function (this: typeof button) {
		const activeButtonClass = "navigation__button--current";
		if (this.classList.contains(activeButtonClass))
			return;
		const currentButton = document.getElementsByClassName(activeButtonClass);
		currentButton[0].classList.remove(activeButtonClass);
		this.classList.add(activeButtonClass);
		let newSection: string;
		switch (this.textContent) {
			case "Якась гра":
				newSection = gameSection;
				break;
			case "Державний":
				break;
			default:
				break;
		}
		document.getElementsByClassName("content")[0].innerHTML = newSection;
	})
}

const gameSection = '<div id="app"></div><script type="module" src="src/Game/game.ts"></script>';

export {}
