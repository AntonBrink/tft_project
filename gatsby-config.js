module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TFTRandom`,
        short_name: `TFTRandom`,
        start_url: `/`,
        background_color: `#15aff2`,
        theme_color: `#15aff2`,
        display: `standalone`,
        icon: `src/images/tftIcon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
