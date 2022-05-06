import "./styles.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Footer from "./Footer";
import { createStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";

export const store = createStore(Reducer);

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Container">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}
