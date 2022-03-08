import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersistenceService } from 'src/app/persistence.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './task.component.html',
  styleUrls: []
})
export class TaskComponent implements OnInit {

  private _myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private persistence: PersistenceService) {
    this._myForm = this.formBuilder.group({
      task: ['', [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
      level: 'low'
    });
  }

  get myForm(): FormGroup {
    return this._myForm;
  }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    const task: string = this._myForm.value.task;
    const level: string = this._myForm.value.level;
    this.persistence.save(task, level);
    alert('Valid task');
    this._myForm.reset({
      task: '',
      level: 'low'
    });
  }

}
