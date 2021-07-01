exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /check_webp_feature/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
