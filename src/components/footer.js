import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Footer() {
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
      }
    }
  }  
  `)
  return <div>
    <p>{data.site.siteMetadata.author}</p>
    </div>
}
