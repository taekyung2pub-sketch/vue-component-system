import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-docs',
    ],

    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },

    viteFinal: async (config) => {
        return mergeConfig(config, {
            plugins: [vue()],

            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '../'),
                    '~': path.resolve(__dirname, '../'),
                },
            },

            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `
              @import "@/assets/styles/abstracts/_variables.scss";
              @import "@/assets/styles/abstracts/_mixins.scss";
            `,
                    },
                },
            },
        })
    },
}

export default config