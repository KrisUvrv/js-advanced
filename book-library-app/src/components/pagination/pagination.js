import {DivComponent} from "../../common/div-component.js";
import './pagination.css';
import onChange from "on-change";
export class Pagination extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  next() {
    this.state.offset += this.state.limit;
  }

  back() {
    if (this.state.offset > 0) {
      this.state.offset -= this.state.limit;
    } else {
      this.state.offset = 0;
    }

  }

  render() {
    this.el.innerHTML = `
     <div class="pagination">
        <button id="back">
            <img src="../../../static/back.svg" alt="back">
            Предыдущая страница
        </button>
        <button id="next">
            Следующая страница
            <img src="../../../static/forward.svg" alt="forward"></button>
        </button>
        
    </div>
    `;
    this.el.addEventListener('click', (event) => {
      if (event.target.id === "next") {
        console.log('next');
        console.log(this.state.offset);
        this.next();
      } else if (event.target.id === "back") {
        console.log('back');
        this.back();
        console.log(this.state.offset);
      }
    })

    // document.addEventListener('keyup', (event) => {
    //   if (event.code === 'ArrowRight') {
    //     console.log('next');
    //     this.next()
    //   }
    //   if (event.code === 'ArrowLeft') {
    //     console.log('back');
    //     this.back()
    //   }
    // })

    return this.el;
  }
}
