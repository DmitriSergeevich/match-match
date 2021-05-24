import './header.scss';
import { BaseComponent } from '../base-component';

export class Header extends BaseComponent {
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
    <div class="header-wrapper">
      <div class="header-logo">
        <div class="header-logo-item header-logo-item__top">
          MATCH
        </div>
        <div class="header-logo-item header-logo-item__bottom">
          MATCH
        </div>
      </div>
      <div class="header-bar">
        <button class="button button__header">
          <div class="button-ico button-ico__question"></div>
          <span>About Game</span>
        </button>
        <button class="button button__header">
          <div class="button-ico button-ico__star"></div>
          <span>Best Score</span>
        </button>
        <button class="button button__header">
          <div class="button-ico button-ico__sattelite"></div>
          <span>Game Settings</span>
        </button>
      </div>
      <button class="button button__base button__white">
        <span>register new player</span>
      </button>
    </div>
    `;
  }
}
