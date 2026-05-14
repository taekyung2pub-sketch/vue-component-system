import type { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from './BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
    title: 'base/Button',

    component: BaseButton,

    tags: ['autodocs'],

    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'ghost'],
        },

        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
}

export default meta

type Story = StoryObj<typeof BaseButton>

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
    },

    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args }
        },

        template: `
          <BaseButton v-bind="args">
            Button
          </BaseButton>
        `,
    }),
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
    },

    render: (args) => ({
        components: { BaseButton },

        setup() {
            return { args }
        },

        template: `
          <BaseButton v-bind="args">
            Button
          </BaseButton>
        `,
    }),
}