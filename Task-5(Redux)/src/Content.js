import "./styles.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "./action";
import { connect } from "react-redux";
export const Content = ({ update }) => {
  const [name, setName] = useState("");
  const onChange = (event) => setName(event.target.value);
  const handleUpdate = (event) => {
    event.preventDefault();
    update(name);
  };
  return (
    <div className="Content">
      <form onSubmit={handleUpdate}>
        <label>Enter your Username : </label>
        <input type="text" placeholder="Enter your name" onChange={onChange} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    updatedName: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    update: (name) => dispatch(updateName(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
