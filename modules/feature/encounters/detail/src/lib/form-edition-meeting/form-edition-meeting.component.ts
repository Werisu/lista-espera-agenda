import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Encounter } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-form-edition-meeting',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-edition-meeting.component.html',
  styleUrl: './form-edition-meeting.component.scss',
})
export class FormEditionMeetingComponent implements OnInit {
  private fb = inject(FormBuilder);
  data: Encounter = inject(MAT_DIALOG_DATA);
  form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      id: [this.data.id],
      amigoId: [this.data.amigoId],
      createdAt: [this.data.createdAt],
      date: [new Date(this.data.date).toLocaleDateString('en-CA')],
      location: [this.data.location],
      description: [this.data.description],
      status: [this.data.status],
    });
  }
}
