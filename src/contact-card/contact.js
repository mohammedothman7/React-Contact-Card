import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: PropTypes.name,
  //     mobile: PropTypes.mobile,
  //     work: PropTypes.work,
  //     email: PropTypes.email,
  //   };
  // }
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <ul>
          <li>mobile: {this.props.mobile}</li>
        </ul>
      </>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  work: PropTypes.string,
  email: PropTypes.string.isRequired,
};

export default Contact;
