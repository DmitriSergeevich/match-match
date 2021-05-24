import './styles.scss';
import { Header } from './components/header/header';
import { Register } from './components/register/register';
import { MainWindow } from './components/main-window/main-window';
import { Score } from './components/score/score';
import { Settings } from './components/settings/settings';
//  import { BaseComponent } from "./components/base-component";

window.onload = () => {
  //  const appElement = document.querySelector('body');
  //  if(!appElement) throw Error('App root element not found');
  //  new App(document.body).start();
  const page: any = document.getElementById('body');
  page.innerHTML = `
  <div class="page">
    <main>
    </main>
  </div>
  `;

  //  const header : any = new Header();
  //  document.querySelector('.page')?.prepend(header.element);

  //  const mainWindow : any = new MainWindow();
  //  document.querySelector('main')?.appendChild(mainWindow.element);

  //  const register : any = new Register();
  //  document.querySelector('.page')?.prepend(register.element);

  //  const score : any = new Score();
  //  document.querySelector('main')?.appendChild(score.element);

  const settings : = new Settings();
  document.querySelector('main')?.appendChild(settings.element);
};
