import PropTypes from 'prop-types';
import React from 'react';

const RenderName = (props) => {
    return <div>{props.name}</div>;
};

RenderName.propTypes = {
    name: PropTypes.string.isRequired,
};
// Here we're indicating that not only is name a required prop for this component, but it must be a string
// If we try to render this component with eith a missing or non-string prop for name, we'll get a helpful error message. 
// Great for debugging (And avoiding bugs in the first place)


export default RenderName;