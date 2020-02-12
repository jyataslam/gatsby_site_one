const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const singleBlog = path.resolve("./src/templates/blog-template/blog-template.js");
    const blogList = path.resolve("./src/templates/blog-list/blog-list.js");
    const singleProject = path.resolve("./src/templates/project-template/project-template.js");

    const result = await graphql(`
        {
            allMarkdownRemark{
                edges {
                  node {
                    frontmatter {
                      path
                    }
                  }
                }
            }  
            allProjectsJson {
                edges {
                    node {
                        id
                    }
                    next {
                        id
                        title
                        sector
                        client
                        featured_image {
                          childImageSharp {
                            fluid(maxWidth: 1060, maxHeight: 600, quality: 100) {
                              src
                            }
                          }
                        }
                    }
                    previous {
                        id
                        title
                        sector
                        client
                        featured_image {
                          childImageSharp {
                            fluid(maxWidth: 1060, maxHeight: 600, quality: 100) {
                              src
                            }
                          }
                        }
                    }
                }
            }     
        }
    `);
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: singleBlog,
            context: {
                slug: node.frontmatter.path
            }
        })
    })

    const postsPerPage = 4;
    const numberOfPages = Math.ceil(posts.length/postsPerPage);

    Array.from({length: numberOfPages}).forEach((_, index) => {
      const isFirstPage = index === 0;
      const currentPage = index + 1;
      if(isFirstPage) return;
      createPage({
        path: `blog/page/${currentPage}`,
        component: blogList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          numberOfPages
        }
      })
    })

    result.data.allProjectsJson.edges.forEach(({node, next, previous}) => {
        createPage({
            path: `project/${node.id}`,
            component: singleProject,
            context: {
                id: node.id,
                next,
                previous
            }
        })
    })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}