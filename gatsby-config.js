const path = require('path');
module.exports = {
  pathPrefix: `/rosa`,
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
        fileName: false
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Raleway`,
              variants: [`500`, `700`]
            },
            {
              family: `Anton`,
              variants: [`400`]
            }
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
     `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/**.ts`],
        }
      },
      ignore:  [
        `/**.png`,
        `/**.jpg`,
        `/**.svg`,
        `/styles.ts`,
        `/**.scss`,
        `/**.json`,
      ],
    },
    {
      resolve: 'gatsby-plugin-exclude',
      options: { paths: [`/pages/**.ts]`]},
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: `/src/images/uploads`,
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['thumbnail'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
            },
          },
          {
            resolve: `gatsby-remark-images`,
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Israel Rosa`,
        short_name: `Rosa`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#2B2B2B`,
        icon: `static/icon.png`,
        display: `standalone`,
        theme_color_in_head: false,
      },
    },
  ],
}
