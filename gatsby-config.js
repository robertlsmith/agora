require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Agora",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          projectId: process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId: process.env.messagingSenderId,
          appId: process.env.appId,
          measurementId: process.env.measurementId,
        },
      },
    },
  ],
};
