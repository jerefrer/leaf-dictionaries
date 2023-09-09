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
          './src/css/tailwind.css', './src/css/custom.stylus',
        ],
        social: {
          github: 'https://github.com/jerefrer/leaf-dictionaries'
        },
        head: [
          {
            tag: 'script',
            content: `window.addEventListener('load', () => {
              var span = document.querySelector(".site-title span");
              if (span && span.textContent) {
                var parts = span.textContent.split(" ");
                span.innerHTML = [
                  parts[0].split("").map((char) => '<u>' + char + '</u>').join(''),
                  parts.slice(1),
                ].join(" ");
              }
              setTimeout(() => {
                document.querySelectorAll(".site-title, .hero").forEach((element) => element.classList.add('colored'));
              }, 100);
            })`
          },
        ],
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
      {applyBaseStyles: false}
    )
  ]
});
