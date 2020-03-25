const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve('src/templates/Post.js');
  const posts = [];

  const result = await graphql(`
    query GET_POSTS{
        allFile {
            edges {
            node {
                childMarkdownRemark {
                id
                frontmatter {
                    title
                    category
                    author
                    cover {
                    publicURL
                    }
                }
                html
                }
            }
            }
        }
        }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allFile.edges.forEach((element) => {
    const item = element.node.childMarkdownRemark;
    if (item) posts.push(item);
  });

  posts.forEach((element) => {
    createPage({
      path: `${element.id}`,
      component: productTemplate,
      context: element,
    });
  });
};
