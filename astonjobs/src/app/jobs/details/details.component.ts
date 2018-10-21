import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/model/job';
import { FlashMsgService } from '../../services/flash-msg.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  job: Job;

  constructor(
    private jobsService: JobsService,
    private flashMsgService: FlashMsgService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.job = new Job();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.jobsService.findById(id)
      .subscribe(
        res => this.job = res
      );
  }

  onRemove(job: Job) {
    this.jobsService.remove(job.id).subscribe(
      res => {
        this.router.navigate(['/jobs']);
        this.flashMsgService.addMessage({
          text: `Le job '${job.title}' a bien été supprimé.`,
          type: 'success'
        });
      },
      err => {}
    );
  }
}
