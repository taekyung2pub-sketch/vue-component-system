import type { Preview } from '@storybook/vue3'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#ffffff' },
                { name: 'dark', value: '#1a1a1a' },
                { name: 'subtle', value: '#f5f5f5' },
            ],
        },
    },
}

export default preview