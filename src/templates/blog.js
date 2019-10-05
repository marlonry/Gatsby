import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import blogStyles from './blog.module.scss'

import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate (formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }


    # query ( $slug: String! ) { # this comes from the header
    #     markdownRemark (
    #         fields: {
    #             slug: {
    #                 eq: $slug   
    #             }
    #         }
    #     ) {
    #         frontmatter {
    #             title 
    #             date
    #         }
    #         html
    #     }
    # }
`;

const Blog = (props) => {

    const options = {
        // renderNode: {
        //     "embedded-asset-block": (node) => {
        //         const alt = node.data.target.fields.title['en-US']
        //         const url = node.data.target.fields.file['en-US'].url
        //         return <img alt={alt} src={url} />
        //     }
        // }
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }   

    return (
        <Layout>
            <Head mainTitle={props.data.contentfulBlogPost.title}></Head>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <div className={blogStyles.container}>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </div>
        </Layout>
    )
}

export default Blog