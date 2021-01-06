import React from "react"
//import {Link} from "gatsby"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
const about =({data}) => (
  <div>
    <Layout>
<Img fluid={data.kodingGatsbyImage.childImageSharp.fluid}
alt="hello world"
/>
    </Layout>
  </div>
  
)

export default about
export const query = graphql`
query{
  kodingGatsbyImage: file(relativePath: {eq: "koding.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 2000) {
     ...GatsbyImageSharpFluid
      }
    }
  }
}
`