import "./styles.css";
import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const newValue = useSelector((state) => state);
  return (
    <div className="Footer">
      <h1>Footer {newValue}</h1>
    </div>
  );
}
