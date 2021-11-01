import React, { useRef } from "react";

const AddService = () => {
  const nameRef = useRef();
  const desRef = useRef();

  const handleAddService = (e) => {
    const name = nameRef.current.value;
    const description = desRef.current.value;

    const newService = { name, description };

    //POST
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert(
            "You have successfully added a service all by yourself! Congrats"
          );
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1>Welcome, You can now add services.</h1>
          </div>
          <div
            className="w-50 mx-auto p-5 rounded mt-3"
            style={{ backgroundColor: "#a4de02" }}
          >
            <form onSubmit={handleAddService}>
              <input
                className="m-1 rounded"
                type="text"
                placeholder="name"
                ref={nameRef}
              />
              <input
                className="m-1 rounded"
                type="text"
                placeholder="description"
                ref={desRef}
              />
              <input className="rounded" type="submit" value="Add" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
