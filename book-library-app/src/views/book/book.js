import {AbstractView} from "../../common/view.js";
import onChange from "on-change";
import {Header} from "../../components/header/header.js";

export class BookView extends AbstractView {
  constructor(appState, state) {
    super();
   // this.state = state;
    this.appState = appState;
    this.appState = onChange(this.appState, this.appStateHook.bind(this));
    //this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('О книге');
  }

  destroy() {
    onChange.unsubscribe(this.appState);
  }

  appStateHook(path) { F
    if (path === 'book') {
      this.render();
    }
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = `
        <h1>О книге</h1>    
    `
   //main.append(new Card(this.cardState).render());
    this.app.innerHTML = '';
    this.app.append(main);
    this.renderHeader();
  }

  renderHeader() {
    const header = new Header(this.appState).render();
    this.app.prepend(header);
  }
}
