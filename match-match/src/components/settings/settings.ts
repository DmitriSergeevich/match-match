import { BaseComponent } from '../base-component';
import './settings.scss';
import { Header } from '../header/header';

export class Settings extends BaseComponent {
  private readonly header: Header;

  constructor() {
    super('div', ['settings']);
    this.header = new Header();
    this.element.innerHTML = `
      <div class="settings-wrapper">
        <div class="game-cards">
          <div class="settings-type">
            <h2>Game cards</h2>
            <h3>select game cards type</h3>
          </div>
          <svg class="triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
            <path d="M0 0L5 5L10 0H0Z" fill="black" fill-opacity="0.54"/>
          </svg>
        </div>
        <div class="difficulty">
          <div class="settings-type">
            <h2>Difficulty</h2>
            <h3>Select game type</h3>
          </div>
          <svg class="triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5" fill="none">
            <path d="M0 0L5 5L10 0H0Z" fill="black" fill-opacity="0.54"/>
          </svg>
        </div>
      </div>
    `;
    this.element.prepend(this.header.element);
    const headerButtons = this.header.element.querySelectorAll('.button__header');
    headerButtons[2].classList.add('header_active');
  }
}
