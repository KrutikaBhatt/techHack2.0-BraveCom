import React from "react";
import "./styles/eventform.css";

export default function EventForm() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [ename, setEname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
          Email: ${email}
          
        `);

    event.preventDefault();
  };
  return (
    <>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Schedule an Event</h3>
            <p class="blue-text">
              Just answer a few questions
              <br /> and you would be all set!
            </p>
            <div class="card">
              <h5 class="text-center mb-4">Add the following details</h5>
              <form class="form-card" onSubmit={handleSubmit}>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Full Name<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Event name<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="ename"
                      name="ename"
                      placeholder="Enter your Event Name"
                      value={ename}
                      onChange={(e) => setEname(e.target.value)}
                      required
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Email<span class="text-danger"> *</span>
                    </label>{" "}
                    <input type="text" id="email" name="email" placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required/>{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Phone number<span class="text-danger"> *</span>
                    </label>{" "}
                    <input type="text" id="mob" name="mob" placeholder="Enter your number" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required/>{" "}
                  </div>
                </div>

                <div class="row justify-content-between text-left">
                  <div class="form-group col-12 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Describe your event<span class="text-danger"> *</span>
                    </label>{" "}
                    <input type="text" id="ans" name="ans" placeholder="Enter event description"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      required/>{" "}
                  </div>
                </div>
                <div class="row justify-content-end">
                  <div class="form-group col-sm-6">
                    {" "}
                    <button type="submit" class="btn-block btn-primary">
                      Submit
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
