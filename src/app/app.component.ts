import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FriendSearchComponent } from '@lista-espera-agenda/friend-search';
import { LayoutModule } from '@lista-espera-agenda/layout';

@Component({
  imports: [RouterModule, LayoutModule, FriendSearchComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lista-espera-agenda';
}
