import type { Component } from "solid-js";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

const App: Component = () => {
  return (
    <div class="bg-magnolia h-screen flex justify-center items-center">
      <div class="bg-white h-8/12 w-11/12 sm:w-9/12 max-w-5xl rounded-2xl p-4">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
};

export default App;
