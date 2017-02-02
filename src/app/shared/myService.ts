
import {Injectable} from "@angular/core";

import { Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyService {

  sorting = {
    top:"top",
    latest: "latest",
    popular: "popular"
  };

  article:string = "https://newsapi.org/v1/articles?source=";
  source:string =   "https://newsapi.org/v1/sources?";
  apiKey:string = "c05ffcea16ee4e91ae668621c4ce02e0";
  sortBy:string = "&sortBy=top&apiKey=";

  constructor(private http:Http) {
    this.http = http;
  }

  getData(val): Observable<Comment> {


   return this.http.get(val)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  findSource(src) {
      return this.article + src + this.sortBy + this.apiKey;
  }

}

export class Comment {
  constructor(

  ){}
}

