// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Exiled',
  tagline: 'SCP:SL Low Level Plugin Framework',
  url: 'https://exiled-team.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Exiled-Team',
  projectName: 'EXILED',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Exiled-Team/EXILED/tree/master/docs',
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
      /*announcementBar: {
        id: 'announce_bar',
        content:
            'WIP Documentation',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: false,
      },*/
      navbar: {
        title: 'Exiled',
        logo: {
          alt: 'Exiled Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'Installation/Intro',
            position: 'left',
            label: 'Installation',
          },
          {
            href: 'https://github.com/Exiled-Team/EXILED',
            position: 'right',
            label: 'Github',
          },
          {
            href: 'https://discord.gg/PyUkWTg',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Exiled-Team, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
