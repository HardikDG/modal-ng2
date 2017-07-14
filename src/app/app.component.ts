import {Component} from "@angular/core";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-root',
  template: `<button (click)="onClick()">Alert</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public modal: Modal) {
  }

  onClick() {
    this.modal.alert()
      .size('lg')
      .showClose(true)
      .title('A simple Alert style modal window')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close with button click</li>
                <li>HTML content</li>
            </ul>`)
      .open();
  }
}
