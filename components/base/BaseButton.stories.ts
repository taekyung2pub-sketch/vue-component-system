import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
    title: 'base/Button',
    component: BaseButton,
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
}
export default meta

type Story = StoryObj<typeof BaseButton>

export const Primary: Story = { args: { variant: 'primary', default: 'Button' } }
export const Secondary: Story = { args: { variant: 'secondary', default: 'Button' } }
export const Ghost: Story = { args: { variant: 'ghost', default: 'Button' } }
export const Small: Story = { args: { size: 'sm', default: 'Small' } }
export const Large: Story = { args: { size: 'lg', default: 'Large' } }