// @ts-check

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Power Platform Engineering Academy",
  tagline: "From Fundamentals to Enterprise Power Platform Engineering",

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

        blog: {
          showReadingTime: true,
          authorsMapPath: "authors.yml",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: "Power Platform Engineering Academy",

        items: [
          {
            type: "docSidebar",
            sidebarId: "learningSidebar",
            position: "left",
            label: "Learning Paths",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
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
            title: "Learn",
            items: [
              {
                label: "Learning Paths",
                to: "/docs/start-here",
              },
            ],
          },
          {
            title: "Content",
            items: [
              {
                label: "Blog",
                to: "/blog",
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

        copyright: `Copyright © ${new Date().getFullYear()} Power Platform Engineering Academy.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
