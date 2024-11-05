import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<div class="bg-primary m-5 p-5">
                Shop Application
            </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {

}
