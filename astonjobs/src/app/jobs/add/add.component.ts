import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: '',
      company: '',
      city: '',
      zipcode: null,
      description: '',
      contractType: '',
      startDate: new Date(),
    });
  }

  addJob(): void {
    console.log(this.form.value);
  }

}
