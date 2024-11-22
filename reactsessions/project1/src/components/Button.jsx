import React from 'react'
import PropTypes from 'prop-types';

const Button = ({myicon,mycolor,mytext,myfontsize,onclickhandler,stud}) => {
  return (
    <button style={{backgroundColor: mycolor,fontSize: myfontsize,}} onClick={onclickhandler}>{mytext} {myicon}</button>
  )
}

//prop validation
Button.propTypes = {
  myicon: PropTypes.element, // For React elements like icons
  mycolor: PropTypes.string.isRequired, // Required string
  mytext: PropTypes.string, // Optional string
  myfontsize: PropTypes.string.isRequired, // Required string
  onClickHandler: PropTypes.func, // Function for the click handler
  stud:PropTypes.shape({
      rno:PropTypes.number.isRequired,
      sname:PropTypes.string.isRequired,
      per:PropTypes.number.isRequired
  })
};

Button.defaultProps = {
  myfontsize:"18px"
}
export default Button