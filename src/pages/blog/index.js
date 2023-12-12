import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import './index.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h3>
              <Link className='entry-title' to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
            <p className='entry-date'>Posted: {node.frontmatter.date}</p>
            <p >{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage