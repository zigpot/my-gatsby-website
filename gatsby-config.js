/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `fariz' site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-image",
  "gatsby-plugin-sharp",    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/icon.svg',
    },
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "/home/fariz/tmp/my-gatsby-site/blog/"
    },
    __key: "pages"
  },
  "gatsby-plugin-mdx",]
};
