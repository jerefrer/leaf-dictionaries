import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://jerefrer.github.io',
  base: '/leaf-dictionaries',
  integrations: [starlight({
    title: 'LEAF Dictionaries',
    customCss: ['./src/css/tailwind.css', './src/css/custom.stylus'],
    social: {
      github: 'https://github.com/jerefrer/leaf-dictionaries'
    },
    head: [
      {
        tag: 'script',
        content: `
          window.addEventListener('load', () => {
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
          })
        `
      }, {
        tag: 'script',
        attrs: {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-FYFKYL5NB9',
          // 'id': 'G-FYFKYL5NB9',
          async: true,
        },
      }, {
        tag: 'script',
        content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FYFKYL5NB9');
        `
      }
    ],
    sidebar: [{
      label: 'Installation',
      autogenerate: {
        directory: 'installation'
      }
    }, {
      label: 'Dictionaries',
      autogenerate: {
        directory: 'dictionaries'
      }
    }, {
      label: 'Troubleshooting',
      autogenerate: {
        directory: 'troubleshooting'
      }
    }, {
      label: 'Credits',
      link: 'credits'
    }, {
      label: 'Donate',
      link: 'donate'
    }, {
      label: 'Help & Contribution',
      link: 'help-and-contribution'
    }]
  }), tailwind({
    applyBaseStyles: false
  }), svelte()]
});