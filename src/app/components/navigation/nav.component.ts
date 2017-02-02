import {Component, OnInit} from "@angular/core";
import {MyService} from "../../shared/myService";

@Component({
  moduleId: module.id,
  selector: "cm-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})


export class NavComponent implements OnInit{
  public myService:any;
  public comments;
  constructor(myService: MyService) {

    this.myService = myService;
    // return this.user = myService.getData();
  }


  ngOnInit() {
    console.log(`loaded content`);

  }



  navList: CheckNavList[] = [
    {
      item: "All News",
      id: 1
    },
    {
      item: "Business ",
      id: 2
    },
    {
      item: "Celebrity",
      id: 3
    }
  ];


  recompile() {

  }
}


export class CheckNavList {
  item: string;
  id: number;
}
