import React, { Component } from 'react';
import PropTypes from 'prop-types'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({toggleNav}) => (
  <div className="container-fluid">
      <div>
          <FontAwesomeIcon icon={faBars} onClick={toggleNav.bind()}/>
      </div>
  </div>
)

Header.propTypes = {
  toggleNav: PropTypes.func.isRequired
}

export default Header;