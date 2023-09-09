import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jerefrer.github.io',
  base: '/leaf-dictionaries',
  integrations: [
    starlight(
      {
        title: 'LEAF Dictionaries',
        customCss: [
          './src/tailwind.css',
        ],
        social: {
          github: 'https://github.com/jerefrer/leaf-dictionaries'
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
