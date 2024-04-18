import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent, within } from '@storybook/test';
import { calculatorComponent } from './calculator.component';

const meta: Meta<calculatorComponent> = {
  title: 'App/Component/Calculator',
  component: calculatorComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<calculatorComponent>;

export const Calculator: Story = {
  args: {},
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    const firstArgInput = canvas.getByLabelText('First Number', { selector: 'input' });
    const secondArgInput = canvas.getByLabelText('Second Number', { selector: 'input' });

    await userEvent.clear(firstArgInput);
    await userEvent.type(firstArgInput, '2', { delay: 100 });
    await userEvent.clear(secondArgInput);
    await userEvent.type(secondArgInput, '2', { delay: 100 });

    await userEvent.click(canvas.getByText('Berechnen'));

    expect(canvas.getByTestId('calculation-result').innerHTML).toEqual('Calculation result 4');
  },
};
