import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/model/job';
import { BadgeService } from 'src/app/services/badge.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(
    private jobsService: JobsService,
    private badgeService: BadgeService
    ) { }

  ngOnInit() {
    this.jobsService.findAll()
        .subscribe(
          res => {
             this.jobs = res;
             this.badgeService.delete();
            }
        );
  }

}
