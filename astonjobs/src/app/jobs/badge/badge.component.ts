import { Component, OnInit } from '@angular/core';
import { BadgeService } from 'src/app/services/badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  badgeCount: number;

  constructor(
    private badgeService: BadgeService
  ) { }

  ngOnInit() {
    this.updateBadge();
  }

  updateBadge() {
    this.badgeService.badge.subscribe(
      data => {
        this.badgeCount = data;
      }
    );
  }

  deleteBadge() {
  }
}
