import type { Meta, StoryObj } from '@storybook/angular';
import { NumberInputComponent } from './number-input.component';

const meta: Meta<NumberInputComponent> = {
  title: 'Lib/Number Input',
  component: NumberInputComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NumberInputComponent>;

export const Default: Story = {
  args: {
    label: "Sample Input"
  },
}
