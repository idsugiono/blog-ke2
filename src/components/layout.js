import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
const Layout =(props) => (
  <div>
    <Header />
      
      <main>{props.children}</main>
    <Footer />
  </div>
  
)

export default Layout