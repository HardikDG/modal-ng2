import {Component} from "@angular/core";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({selector: 'app-root', template: `<button (click)="onClick()">Alert</button>`, styleUrls: ['./app.component.css']})
export class AppComponent {
  constructor(public modal : Modal) {}

  onClick() {
    const dialog = this
      .modal
      .confirm()
      .size('sm')
      .showClose(true)
      .title('A simple Alert style modal window')
      .okBtn('Accept')
      .cancelBtn('Reject')
      .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>`)
      .open();

    dialog.then((resultPromise) => {
      return resultPromise
        .result
        .then((result) => {
          console.log("Result: " + result);
        }, () => console.log('Rejected!'));
    })
  }
}
