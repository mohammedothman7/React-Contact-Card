import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: PropTypes.name,
      mobile: PropTypes.mobile,
      work: PropTypes.work,
      email: PropTypes.email,
    };
  }
  render() {
    return (
      <>
        <h2 id="name">{this.props.name}</h2>
        <ul>
          <li id="mobile">Mobile: {this.props.mobile}</li>
          <li id="work">Work: {this.props.work}</li>
          <li id="email">Email: {this.props.email}</li>
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
