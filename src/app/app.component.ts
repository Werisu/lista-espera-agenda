import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FriendSearchComponent } from '@lista-espera-agenda/friend-search';
import { LayoutModule } from '@lista-espera-agenda/layout';
import { environment } from '../environments/environment';

@Component({
  imports: [RouterModule, LayoutModule, FriendSearchComponent],
  providers: [{ provide: 'API_URL', useValue: environment.apiUrl }],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lista-espera-agenda';
}
