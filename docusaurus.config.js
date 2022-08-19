// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bienvenido al Explorer Course',
  tagline: 'Curso introductorio a los fundamentos de desarrollo web',
  url: 'https://62fe9f279194410082509168--cool-kheer-7d8aca.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AgileInnova', // Usually your GitHub org/user name.
  projectName: 'Explorer Course', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Inicio',
        logo: {
          alt: 'Logo Agile Innova',
          src: 'https://res.cloudinary.com/dpkaiokho/image/upload/v1657830394/Agile%20Innova/logos/AgileInnova_v7zvm6.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Explorer Course',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/AgileInnova',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Explorer Course',
                to: '/docs/intro',
              },
              {
                label: 'Primeros pasos',
                to: '/docs/category/primeros-pasos',
              },
              {
                label: 'JavaScript',
                to: '/docs/category/javascript'
              },
              {
                label: 'HTML - CSS',
                to: '/docs/category/html---css'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/agileinnova-106397675475627',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/agileinnova/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/agileinnova',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/agileinnova/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCtnSSx5_WIAWw6BroblGoKQ',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AgileInnova',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://agileinnova.org/academy" target="_blank" >Agile Innova Academy</a>. Realizado por <a href="https://agileinnova.org/" target="_blank" >Agile Innova.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
