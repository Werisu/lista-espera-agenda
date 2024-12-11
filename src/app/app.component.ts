import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@lista-espera-agenda/layout';

@Component({
  imports: [RouterModule, LayoutModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lista-espera-agenda';
}
