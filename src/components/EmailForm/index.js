import React from "react";

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mknzkjeq"
        method="POST"
      >
          <div className="form-group">
          <label>Name:</label>
          <input type="text" 
          name="name" 
          className="form-control"/>
          </div> 
        <div className="form-group">
        <label>Email:</label>
        <input
       type="email"
       className="form-control"
       id="exampleInputEmail1"
       aria-describedby="emailHelp"
     />
        <small id="emailHelp" className="form-text text-muted" p-3>
       I will never share your email with anyone else.
     </small>
        </div>
        <div className="form-group">
        <label>Message:</label>
        <textarea
       className="form-control"
       id="exampleFormControlTextarea1"
       rows="3"
       name="message"
     ></textarea>
        </div>
       
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}