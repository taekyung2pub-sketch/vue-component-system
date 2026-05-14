import React from 'react'
import { Title, Description, Primary, Controls, Stories } from '@storybook/blocks'

export const CustomDocsPage = (GuideHTML: string) => {
    return function DocsPage() {
        return React.createElement('div', null,
            React.createElement(Title),
            React.createElement(Description),
            React.createElement(Primary),
            React.createElement(Controls),
            React.createElement('div', {
                dangerouslySetInnerHTML: { __html: GuideHTML }
            }),
            React.createElement(Stories, { includePrimary: false }),
        )
    }
}