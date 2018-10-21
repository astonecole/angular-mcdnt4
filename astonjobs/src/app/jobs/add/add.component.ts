import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../model/job';
import { contractTypes } from '../../data/jobs';
import { FlashMsgService } from '../../services/flash-msg.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contractTypes = contractTypes;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobsService,
    private flashMsgService: FlashMsgService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',
      company: '',
      city: '',
      zipcode: null,
      description: '',
      contractType: '',
      startDate: new Date(),
      publishedDate: new Date(),
    });
  }

  addJob(): void {
    this.jobService
        .addJob(this.form.value)
        .subscribe(
          (job: Job) => {
            this.form.reset();
            this.flashMsgService.addMessage({
              text: `Le job '${job.title}' a bien été ajouté.`,
              type: 'success'
            });
          },
          res => {
            this.flashMsgService.addMessage({
              text: res.statusText,
              type: 'danger'
            });
          }
        );
  }
}
