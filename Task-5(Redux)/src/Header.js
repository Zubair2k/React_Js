import "./styles.css";
import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const newValue = useSelector((state) => state);
  return (
    <div className="Header">
      <h1>Header {newValue}</h1>
    </div>
  );
}
