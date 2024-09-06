import type { Preview } from "@storybook/react";
import { themes, ensure } from '@storybook/theming';
import * as DocBlock from '@storybook/blocks';
import * as React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: ensure(themes.dark),
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Description />
          <DocBlock.Source />
          <DocBlock.Stories />
          <DocBlock.Canvas />
        </>
      ),
    }
  },
  tags: ['autodocs'],
};

export default preview;
