import React from "react"
import PropTypes from "prop-types"
  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
