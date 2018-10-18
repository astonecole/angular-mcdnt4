import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';
import { Job } from 'src/app/model/job';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.findAll()
        .subscribe(
          res => this.jobs = res
        );
  }

}
