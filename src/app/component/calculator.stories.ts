import type { Meta, StoryObj } from '@storybook/angular';
import { calculatorComponent } from './calculator.component';

const meta: Meta<calculatorComponent> = {
  title: 'App/Component/Calculator',
  component: calculatorComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<calculatorComponent>;

export const Calculator: Story = {};
