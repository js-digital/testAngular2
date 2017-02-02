import {Component} from '@angular/core';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
   moduleId: module.id,
   selector: 'adapt-tabs',
   templateUrl: './tabs.component.html'
})

export default class Tabs {
   public beforeChange($event: NgbTabChangeEvent) {
      if ($event.nextId === 'bar') {
         $event.preventDefault();
      }
   };
}