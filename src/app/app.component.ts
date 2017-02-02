import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showFader = false;


  ngOnInit() {

    setTimeout(()=> {
      this.showFader = true;
    }, 300);

  }
}
