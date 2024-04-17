import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1>Hello, {{ title }}</h1>
    </header>
  `
})
export class HeaderComponent {
  title = 'storybook-example';
}
