import React from "react";

const filterCustomProps = (Component, filteredProps) => (props) => {
  const newProps = Object.assign({}, props)
  filteredProps.forEach(propName => {
    delete newProps[propName]
  })
  return <Component {...newProps} />
}

export default filterCustomProps;
