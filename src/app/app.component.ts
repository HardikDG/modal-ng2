import {Component} from "@angular/core";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({selector: 'app-root', template: `<button (click)="onClick()">Alert</button>`, styleUrls: ['./app.component.css']})
export class AppComponent {
  title = "Sample title";
  body = "This is dynamic body text from the typescript variable"

  constructor(public modal : Modal) {}

  onClick() {
    const dialog = this
      .modal
      .confirm()
      .size('sm')
      .showClose(true)
      .title(this.title)
      .okBtn('Accept')
      .cancelBtn('Reject')
      .body(`
            <h4>Classic confirm popup</h4> ` + this.body)
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
