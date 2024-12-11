import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import {
  Amigo,
  FriendSearchService,
} from '@lista-espera-agenda/friend-data-access';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'lib-friend-search',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './friend-search.component.html',
  styleUrl: './friend-search.component.scss',
})
export class FriendSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  friends$!: Observable<Amigo[]>;

  constructor(private friendSearchService: FriendSearchService) {}
  ngOnInit(): void {
    this.friends$ = this.control.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter((value) => value.length > 0),
      switchMap((value) => this.friendSearchService.searchByName(value))
    );
  }
}
