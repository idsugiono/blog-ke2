import React from "react"
//import {Link} from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
const indexpage =({data}) => (
  <div>
    <Layout>
      <h1>my frist blog </h1>
      <p>halo saya sugiono ini adalah blog saya</p>
<Img fluid={data.cityGatsbyImage.childImageSharp.fluid}
alt="hello world"
/>
    </Layout>
  </div>
  
)

export default indexpage
export const query = graphql`
query{
  cityGatsbyImage: file(relativePath: {eq: "city.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
     ...GatsbyImageSharpFluid
      }
    }
  }
}
`