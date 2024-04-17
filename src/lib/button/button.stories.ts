import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Lib/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    label: 'Button'
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true
  },
};

export const Secondary: Story = {
  args: {
    primary: false
  },
};


