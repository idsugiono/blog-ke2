import React from "react"
import {Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import blogStyles from "../components/blog.scss"

const Blog = () => {
  const data = useStaticQuery(graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM-DD-Y")
            cover
        }
        slug
      }
    }
  }
}
`)

  return (
    <Layout>
      <div>
        <h1>blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMdx.edges.map((edge) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/${edge.node.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })} 
        </ol>
     </div>
     </Layout>
  )
}
export default Blog
 