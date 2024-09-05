import React, { Component } from "react";
import InputGroup from "./InputGroup";

class PersonalDetails extends Component {
  render() {
    const { onChange, email, fullName, phoneNumber, address } = this.props;
    return (
      <div className="personal-details">
        <InputGroup
          type="text"
          id="full-name"
          labelText="Full name"
          placeholder="First and last name"
          value={fullName}
          onChange={onChange}
          data-key="fullName"
        />
        <InputGroup
          type="email"
          id="email"
          labelText="Email"
          placeholder="Enter email"
          value={email}
          onChange={onChange}
          data-key="email"
          recommended
        />
        <InputGroup
          type="tel"
          id="phone-number"
          labelText="Phone number"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={onChange}
          data-key="phoneNumber"
          recommended
        />
        <InputGroup
          type="text"
          id="address"
          labelText="Address"
          placeholder="City, Country"
          value={address}
          onChange={onChange}
          data-key="address"
          recommended
        />
      </div>
    );
  }
}

export default PersonalDetails;