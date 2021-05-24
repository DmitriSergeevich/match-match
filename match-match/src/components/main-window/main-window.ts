import { BaseComponent } from "../base-component";
import './main-window.scss';
import { Header } from '../header/header';
export class MainWindow extends BaseComponent {
  private readonly header: Header;
  constructor() {
    super('div', ['main-window']);
    this.header = new Header();
    this.element.innerHTML = `
      <div class="main-window-wrapper">
        <div class="about-game">
          <h2>How to play?</h2>
          <div class="about-game__grid">
            <div class="about-game__item reg">
              <div class="about-game__number">1</div>
              <span class="about-game__text">Register new player in game</span>
            </div>
            <div class="about-game__item conf">
              <div class="about-game__number">2</div>
              <span class="about-game__text">Configure your game settings</span>
            </div>
            <div class="about-game__item start-game">
              <div class="about-game__number">3</div>
              <span class="about-game__text">Start you new game! Remember card positions and match it before times up.</span>
            </div>
            <div class="about-game__img about-game__img-reg"></div>
            <div class="about-game__img about-game__img-conf"></div>
            <div class="about-game__img about-game__img-start-game"></div>
          </div>
        </div>
      </div>
    `;
    this.element.prepend(this.header.element)
    const headerButtons = this.header.element.querySelectorAll('.button__header');
    headerButtons[0].classList.add('header_active')
  };
}
