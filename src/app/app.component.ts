import { Component } from '@angular/core';
import { calculatorComponent } from './component/calculator.component';
import { HeaderComponent } from './layout/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, calculatorComponent],
  template: `
    <main class="main">
    <div class="content">
      <app-header />
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
