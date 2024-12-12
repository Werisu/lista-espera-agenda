import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Amigo } from '@lista-espera-agenda/friend-data-access';

@Component({
  selector: 'lib-friend-edit',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './friend-edit.component.html',
  styleUrl: './friend-edit.component.scss',
})
export class FriendEditComponent implements OnInit {
  @Input() friend?: Amigo;
  private formBuilder = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(this.friend?.name),
      avatar: new FormControl(this.friend?.avatar),
      cost: new FormControl(this.friend?.cost),
      meetings: new FormControl(this.friend?.encounters),
      birthday: new FormControl(this.friend?.birthday),
      age: new FormControl(this.friend?.age),
      id: new FormControl(this.friend?.id),
      createdAt: new FormControl(this.friend?.createdAt),
      address: new FormControl(this.friend?.address),
      whatsapp: new FormControl(this.friend?.whatsapp),
    });
  }
}
