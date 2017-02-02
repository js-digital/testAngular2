
import {Component} from "@angular/core";


@Component({
  moduleId: module.id,
  selector: "cm-button",
  templateUrl: "./button.component.html"
})


export class ButtonComponent {
  model = 1;


  models = {
    left: true,
    middle: false,
    right: false
  };
}
