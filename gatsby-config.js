/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Open Sans`,
            subsets: [`latin`]
          },
        ],
      },
    }],
}
