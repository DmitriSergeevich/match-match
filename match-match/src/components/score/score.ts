import './score.scss';
import { BaseComponent } from "../base-component";
import { Header } from '../header/header';
export class Score extends BaseComponent {
  private readonly header: Header;

  constructor() {
    super('div', ['score']);

    this.header = new Header();

    this.element.innerHTML = `
    <div class="score-wrapper">
      <h2>Best players</h2>
      <div class="score-list">
        <div class="score-line">
          <div class="score-avatar"></div>
          <div class="score-bio">
            <h3 class="score-name">Nicci Troiani</h3>
            <h4 class="score-email">nicci@gmail.com</h4>
          </div>
          <h3 class="score-points">Score: <span>456</span></h3>
        </div>
      </div>
    </div>
    `;
    this.element.prepend(this.header.element)
    const headerButtons = this.header.element.querySelectorAll('.button__header');
    headerButtons[1].classList.add('header_active')
  };

}
