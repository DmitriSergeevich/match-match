import './register.scss';
import { BaseComponent } from "../base-component";



export class Register extends BaseComponent {
  constructor() {
    super('div', ['register']);

    this.element.innerHTML = `
      <div class="register-window">
        <div class="register-wrapper">
          <h2>Register new Player</h2>
          <div class="register-row">
            <div class="user-bio">
              <div class="register__form">
                <div class="register__items">
                  <form class="register__inputs">
                    <label for="first name">First name</label>
                    <input type="text" id="first-name" placeholder="Ivan" required="">
                  </form>
                  <div class="valid-flag"></div>
                </div>
                <div class="register__items">
                  <form class="register__inputs">
                    <label for="last name">Last name</label>
                    <input type="text" id="last-name" placeholder="Ivanov" required="">
                  </form>
                  <div class="valid-flag"></div>
                </div>
                <div class="register__items">
                  <form class="register__inputs">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" placeholder="example@gmail.com" required="">
                  </form>
                  <div class="valid-flag"></div>
                </div>
              </div>
            </div>
            <div class="user-avatar"></div>
          </div>
          <div class="register-buttons">
            <button class="button button__base button__blue">add user</button>
            <button class="button button__base button__light-blue">cansel</button>
          </div>
        </div>
      </div>
    `;
  };
}
