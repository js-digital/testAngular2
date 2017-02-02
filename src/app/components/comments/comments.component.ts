import {
  Component,
  Input,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/core";

import {MyService} from "../../shared/myService";


@Component({
  moduleId: module.id,
  selector: "cm-comment",
  templateUrl: "./comments.component.html",
  animations: [
    trigger('isVisibleChanged', [
      state('true', style({opacity: 1, transform: 'translate3d(0, 0, 0)', visibility: 'visible'})),
      state('false', style({opacity: 0, transform: 'translate3d(0, 20px, 0)', visibility: 'hidden'})),
      transition('1 => 0', animate('.4s')),
      transition('0 => 1', animate('.4s'))
    ])
  ],
  styleUrls: ["comments.component.scss"]
})


export default class CommentsComponent {

  public comment: any;
  public articles: any;

  sources = {
    google: "google-news",
    bbc: "bbc-news",
    cnn: "cnn",
    espn: "espn",
    financialTimes: "financial-times",
    mtvNews: "mtv-news",
    usaToday: "usa-today"
  };


  src = "https://newsapi.org/v1/sources?language=en";

  @Input() isVisible: boolean = false;


  constructor(public myService: MyService) {

  }

  ngOnInit() {
    this.isVisible = false;
    this.loadComments(this.sources.google);
  }


  loadComments(myValues) {

    return this.myService.getData(this.myService.findSource(myValues))
      .subscribe(comment => {
          this.comment = comment;
          this.articles = this.comment.articles;
          // this.isVisible = true;
          return this.articles;
        },
        err => {
          // Log errors if any
          console.log(err);
        });

  }



}
