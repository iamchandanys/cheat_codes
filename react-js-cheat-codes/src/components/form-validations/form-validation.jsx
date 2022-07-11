import Joi from "joi";
import { Component } from "react";

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
    name: Joi.string().alphanum().min(3).max(10).required(),
    email: Joi.string().email(emailValidation).required(),
    number: Joi.number().integer().required(),
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

  onSubmit(e) {}

  contactForm() {
    const mainDiv = {
      padding: "20px",
    };

    return (
      <div style={mainDiv}>
        <div>
          Name: &nbsp;
          <input
            name="name"
            value={this.state.contactForm.name}
            onChange={(e) => this.handleChange(e)}
            required
          />
        </div>
        <br />
        <div>
          Email: &nbsp;
          <input
            name="email"
            value={this.state.contactForm.email}
            onChange={(e) => this.handleChange(e)}
            required
          />
        </div>
        <br />
        <div>
          Number: &nbsp;
          <input
            name="number"
            value={this.state.contactForm.number}
            onChange={(e) => this.handleChange(e)}
            required
          />
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
