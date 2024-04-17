import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fake',
  standalone: true,
  template: `
    <p>Das ist eine Beispiel für Storybook!</p>
  `
})
class AppFakeComponent {
  title = 'storybook-example';
}

const meta: Meta<AppFakeComponent> = {
  title: 'App',
  component: AppFakeComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AppFakeComponent>;

export const Intro: Story = {};
