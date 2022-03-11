import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: []
})
export class UpdateComponent implements OnInit {

  private _updateForm: FormGroup;
  private _taskSelected: any;
  private _taskId: number;

  constructor(private formBuilder: FormBuilder, private persistence: PersistenceService, private route: ActivatedRoute, private router: Router) {
    this._taskId = Number(this.route.snapshot.params['id']);
    this._taskSelected = this.persistence.getTask(this._taskId);
    this._updateForm = this.formBuilder.group({
      task: [this._taskSelected.detail, [
          Validators.required,
          Validators.maxLength(20)
        ]
      ],
      level: this._taskSelected.priority
    });
  }

  get updateForm(): FormGroup {
    return this._updateForm;
  }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    const task: string = this._updateForm.value.task;
    const level: string = this._updateForm.value.level;
    this.persistence.update(this._taskId, task, level);
    this.router.navigate(['/tasks']);
  }

}
