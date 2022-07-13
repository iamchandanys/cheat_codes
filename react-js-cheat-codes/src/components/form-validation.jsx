import Joi from "joi";
import { Component } from "react";

const mainDiv = {
  padding: "20px",
};

const errorTag = {
  color: "red",
};

const emailValidation = {
  minDomainSegments: 2,
  tlds: { allow: ["com", "net", "io"] },
};

class FormValidation extends Component {
  state = {
    contactForm: {
      name: "",
      email: "",
      number: "",
    },
    errors: {},
  };
  schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(10).required().label("Name"),
    email: Joi.string().email(emailValidation).required().label("Email Id"),
    number: Joi.number().integer().required().label("Phone Number"),
  });

  validate() {
    const { error } = this.schema.validate(this.state.contactForm, {
      abortEarly: false,
    });

    if (!error) return null;

    let errors = {};
    error.details.forEach((detail) => {
      errors[detail.path[0]] = detail.message;
    });

    return errors;
  }

  handleChange(e) {
    let contactForm = { ...this.state.contactForm };
    contactForm[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ contactForm });
  }

  handleBlur(e) {
    let result = this.validate();
    let errors = { ...this.state.errors };
    errors[e.currentTarget.name] = result[e.currentTarget.name];
    this.setState({ errors });
  }

  onSubmit(e) {
    const result = this.validate();
    this.setState({ errors: result });
    if (result) return;
    window.alert("Call API");
  }

  contactForm() {
    return (
      <div style={mainDiv}>
        <div>
          Name: &nbsp;
          <input
            name="name"
            autoComplete="off"
            value={this.state.contactForm.name}
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleBlur(e)}
            required
          />
          {this.state.errors && this.state.errors.name && (
            <p style={errorTag}>{this.state.errors.name}</p>
          )}
        </div>
        <br />
        <div>
          Email: &nbsp;
          <input
            name="email"
            autoComplete="off"
            value={this.state.contactForm.email}
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleBlur(e)}
            required
          />
          {this.state.errors && this.state.errors.email && (
            <p style={errorTag}>{this.state.errors.email}</p>
          )}
        </div>
        <br />
        <div>
          Number: &nbsp;
          <input
            name="number"
            autoComplete="off"
            value={this.state.contactForm.number}
            onChange={(e) => this.handleChange(e)}
            onBlur={(e) => this.handleBlur(e)}
            required
          />
          {this.state.errors && this.state.errors.number && (
            <p style={errorTag}>{this.state.errors.number}</p>
          )}
        </div>
        <br />
        <div>
          <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        </div>
      </div>
    );
  }

  render() {
    return this.contactForm();
  }
}

export default FormValidation;
