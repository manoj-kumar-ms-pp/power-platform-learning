// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Power Platform Learning",
  tagline: "From Basics to Enterprise Power Platform Engineering",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  // GitHub Pages
  url: "https://manoj-kumar-ms-pp.github.io",
  baseUrl: "/power-platform-learning/",

  organizationName: "manoj-kumar-ms-pp",
  projectName: "power-platform-learning",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/manoj-kumar-ms-pp/power-platform-learning/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "Power Platform Learning",
        logo: {
          alt: "Power Platform Learning Logo",
          src: "img/logo.svg",
        },

        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Learn",
          },
          {
            href: "https://github.com/manoj-kumar-ms-pp/power-platform-learning",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",

        links: [
          {
            title: "Learning",
            items: [
              {
                label: "Start Learning",
                to: "/docs/intro",
              },
            ],
          },

          {
            title: "Resources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/manoj-kumar-ms-pp/power-platform-learning",
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Power Platform Learning.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
