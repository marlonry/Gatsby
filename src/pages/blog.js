import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import blogStyles from './blog.module.scss';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug 
                        }
                    }
                }
            }
        }
    `)

    const html = ((data) => {
        return data.allMarkdownRemark.edges.map((post, index) => {
            return (
                <li key={index} className={blogStyles.blogPost}>
                    <Link to={`/blog/${post.node.fields.slug}`}>
                        <h2>{post.node.frontmatter.title}</h2>
                        <p>{post.node.frontmatter.date}</p>
                    </Link>
                </li>
            )
        });
    })(data);

    return (
        <Layout>
            <h1>Blog</h1>
            <ul className={blogStyles.blogPostsContainer}>
                {html}
            </ul>
        </Layout>
    )
}

export default BlogPage