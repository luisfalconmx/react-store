import React from 'react'
import propTypes from 'prop-types'
import Navbar from '@containers/Navbar'
import Footer from '@containers/Footer'
import './index.pcss'

const Layout = ({ children }) => (
  <div className="Layout">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: propTypes.node.isRequired
}

export default Layout
