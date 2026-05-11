import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
    stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    viteFinal: async (config: any) => {
        return {
            ...config,
            plugins: [...(config.plugins || []), vue()],
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: `
              @use "../assets/styles/_variables.scss" as *;
              @use "../assets/styles/_mixins.scss" as mix;
            `,
                    },
                },
            },
            resolve: {
                ...config.resolve,
                alias: {
                    ...(config.resolve?.alias || {}),
                    '~': new URL('..', import.meta.url).pathname,
                    '@': new URL('..', import.meta.url).pathname,
                },
            },
        }
    },
}

export default config