import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { PersonasComponent } from './app/personas/personas.component';
import { EmpathyMapComponent } from './app/empathy-map/empathy-map.component';
import { JourneyMapComponent } from './app/journey-map/journey-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: PersonasComponent },
      { path: 'empathy-map', component: EmpathyMapComponent },
      { path: 'journey-map', component: JourneyMapComponent }
    ])
  ]
});