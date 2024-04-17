import { Component } from '@angular/core';
import { calculatorComponent } from './component/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [calculatorComponent],
  template: `
    <main class="main">
    <div class="content">
      <h1>Hello, {{ title }}</h1>
      <div>
        <hr>
        <app-calculator />
      </div>
    </div>
  </main>
  `
})
export class AppComponent {
  title = 'storybook-example';
}
