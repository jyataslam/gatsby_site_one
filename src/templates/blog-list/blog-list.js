import React from 'react'
import {graphql} from 'gatsby'
import SEO from '../../components/seo';
import Layout from '../../containers/layout/layout'
import Banner from '../../containers/blog/banner'
import BlogHeading from '../../containers/blog/blog-heading'
import Blog from '../../components/blog'
import Pagination from '../../components/pagination'
import {SectionWrap, BlogInner} from './blog-list.stc'

const BlogList = (props) => {
    const blogs = props.data.allMarkdownRemark.edges;
    const {currentPage, numberOfPages} = props.pageContext;

    return(
        <Layout>
            <SEO title={`Blog page - ${currentPage}`}/>
            <Banner/>
            <SectionWrap>
                <BlogHeading/>
                <BlogInner>
                    <div className="col-4 offset-1">
                        <div className="row">
                            {blogs.map((blog, i) => (
                                <div className="col-2 blog-wrap" key={`blog-${i}`}>
                                    <Blog
                                        title={blog.node.frontmatter.title}
                                        date={blog.node.frontmatter.date}
                                        author={blog.node.frontmatter.author}
                                        path={blog.node.frontmatter.path}
                                        excerpt={blog.node.frontmatter.shortDesc}
                                        image={blog.node.frontmatter.image.childImageSharp.fluid}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </BlogInner>
            </SectionWrap>
            <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
            />
        </Layout>
    )
}

export const query = graphql `
    query BlogListQuery($skip: Int!, $limit: Int!){
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}, 
            limit: $limit, 
            skip: $skip) {
                edges {
                    node {
                      frontmatter {
                        title
                        path
                        date(formatString: "MMM Do, YYYY")
                        author
                        shortDesc
                        image {
                          childImageSharp {
                            fluid(maxWidth: 600, maxHeight: 630, quality: 100) {
                              ...GatsbyImageSharpFluid
                              presentationWidth
                              presentationHeight
                            }
                          }
                        }
                      }
                    }
                }
        }
    }
`;


export default BlogList;