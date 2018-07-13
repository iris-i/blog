module.exports = {
  siteMetadata: {
    title: 'Iris Ibekwe',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: 'article',
      }
    },
    `gatsby-transformer-remark`,
  ],
}
