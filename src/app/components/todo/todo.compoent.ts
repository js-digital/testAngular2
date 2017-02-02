import {Component} from "@angular/core";


@Component({
  moduleId: module.id,
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})

export class TodoComponent {
  title = "my todo app ";
}
