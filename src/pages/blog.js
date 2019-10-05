import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import blogStyles from './blog.module.scss';
import Head from '../components/head'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate (formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }
        # query {
        #     allMarkdownRemark {
        #         edges {
        #             node {
        #                 frontmatter {
        #                     title
        #                     date
        #                 }
        #                 fields {
        #                     slug 
        #                 }
        #             }
        #         }
        #     }
        # }
    `)

    const html = ((data) => {
        return data.allContentfulBlogPost.edges.map((post, index) => {
            return (
                <li key={index} className={blogStyles.blogPost}>
                    <Link to={`/blog/${post.node.slug}`}>
                        <h2>{post.node.title}</h2>
                        <p>{post.node.publishedDate}</p>
                    </Link>
                </li>
            )
        });
    })(data);

    return (
        <Layout>
            <Head mainTitle="Blog"/>
            <h1>Blog</h1>
            <ul className={blogStyles.blogPostsContainer}>
                {html}
            </ul>
        </Layout>
    )
}

export default BlogPage