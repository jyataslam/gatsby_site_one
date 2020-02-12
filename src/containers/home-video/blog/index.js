import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Blog from '../../../components/blog'
import {BlogSectionWrap, BlogInner} from './blog.stc'

const BlogSection = ({section}) => {
    const blogQueryData = useStaticQuery(graphql `
        query VideoHomeBlogDataQuery {
            homevideodataJson(id: {eq: "video_recent_post_section_content"}) {
                title
                subtitle
            }
            allMarkdownRemark(filter: {frontmatter: {is_featured: {eq: true}}}, limit: 2) {
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
    const blogSecData = blogQueryData.homevideodataJson;
    const blogs = blogQueryData.allMarkdownRemark.edges;
    return (
        <BlogSectionWrap {...section}>
            <div className="col-1 offset-1">
                <SectionTitle
                    title={blogSecData.title}
                    subtitle={blogSecData.subtitle}
                />
            </div>
            <BlogInner className="col-4 offset-1">
                <div className="row">
                    {blogs.map((blog, i) => (
                        <div className="col-2" key={`${blog.node.frontmatter.path}-${i}`}>
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
            </BlogInner>
        </BlogSectionWrap>
    ) 
}

BlogSection.propTypes = {
    section: PropTypes.object
}

BlogSection.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    },
}

export default BlogSection;