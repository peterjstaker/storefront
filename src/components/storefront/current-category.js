import React from 'react';
import { connect } from 'react-redux';

const ActiveCategory = props => {
  return(
    <h1>{props.activeCategory}</h1>
  )
}

const mapStateToProps = state => ({
  activeCategory: state.category.activeCategory
})

export default connect(mapStateToProps)(ActiveCategory);