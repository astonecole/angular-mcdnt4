import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JobsService } from '../../services/jobs.service';
import { Job } from '../../model/job';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  contractTypes = [
    { id: 1, label: 'Stage'},
    { id: 2, label: 'Interim'},
    { id: 3, label: 'CDD'},
    { id: 4, label: 'CDI'},
    { id: 5, label: 'Indépendant'},
  ];

  form: FormGroup;
  alert = {message: '', color: 'success'};

  constructor(private formBuilder: FormBuilder, private jobService: JobsService) { }

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
            this.alert.message = `Le job '${job.title}' a bien été ajouté.`;
            this.form.reset();
          },
          res => {
            this.alert.message = res.statusText;
            this.alert.color = 'danger';
          }
        );
  }
}
