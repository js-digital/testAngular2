import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "cm-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})


export default class HeaderComponent {
  names = "GetNews";
}
