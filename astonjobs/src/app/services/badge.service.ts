import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  badge: Subject<number> = new Subject<number>();
  count = 0;

  constructor() { }

  increment() {
    ++this.count;
    this.badge.next(this.count);
  }

  delete() {
    this.count = 0;
    this.badge.next();
  }
}

