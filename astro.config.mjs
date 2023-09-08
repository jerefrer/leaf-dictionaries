import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight(
      {
        title: 'LEAF Dictionaries',
        customCss: [
          './src/tailwind.css',
        ],
        social: {
          github: 'https://github.com/withastro/starlight'
        },
        sidebar: [
          {
            label: 'Environments',
            autogenerate: {
              directory: 'environments'
            }
          }, {
            label: 'Dictionaries',
            autogenerate: {
              directory: 'dictionaries'
            }
          }, {
            label: 'Donate',
            link: 'donate'
          }
        ]
      }
    ),
    tailwind(
      {
        applyBaseStyles: false
      }
    )
  ]
});
