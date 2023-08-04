import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-lg p-4 m-4"> Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        ></input>
        <button className="border border-black p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
