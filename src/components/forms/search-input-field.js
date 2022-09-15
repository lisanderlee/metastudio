import React from "react";
import {
    Form,
    Input,
  } from "reactstrap";

  export default function SearchInput() {
    return (
      <>
        <Input
        className="form-control-alternative form-control-sm"
        placeholder="Search"
        type="text"
        />
      </>
    )
  }
