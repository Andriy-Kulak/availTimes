import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ text, isBig = false }) => {
  if (isBig) {
    return <h1>{text}</h1>
  }
  return <h2>{text}</h2>
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
}

export default Header
