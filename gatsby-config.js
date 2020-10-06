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
    }
  ],
}
