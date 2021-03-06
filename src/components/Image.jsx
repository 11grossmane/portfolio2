import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Image = () => <Img />

export default Image

Image.propTypes = {
  data: PropTypes.object.isRequired,
}
