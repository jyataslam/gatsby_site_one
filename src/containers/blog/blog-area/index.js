import React, {Fragment} from 'react';
import { useStaticQuery, graphql } from "gatsby"
import BlogHeading from '../blog-heading'
import Blog from '../../../components/blog'
import Pagination from '../../../components/pagination'
import {SectionWrap, BlogInner} from './blog-area.stc'
 
const BlogArea = () => {
    const blogQueryData = useStaticQuery(graphql `
        query BlogDataQuery {
            allMarkdownRemark(limit: 4) {
                totalCount
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
                            ...GatsbyImageSharpFluid_withWebp
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
    `);
    
    const blogs = blogQueryData.allMarkdownRemark.edges;
    const {totalCount} = blogQueryData.allMarkdownRemark;
    const postsPerPage = 4;
    const numberOfPages = Math.ceil(totalCount/postsPerPage);
    return (
      <Fragment>
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
            currentPage={1}
            numberOfPages={numberOfPages}
        />
      </Fragment>
    )
}

export default BlogArea