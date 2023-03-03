import { Component, createSignal } from "solid-js";
import Button, { ButtonType } from "./components/Button";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

const App: Component = () => {
  const [step, setStep] = createSignal(1);
  const handleNext = () => setStep(step() + 1);
  const handleBack = () => setStep(step() - 1);
  return (
    <div class="bg-magnolia h-screen flex justify-center items-center">
      <div class="bg-white h-8/12 w-11/12 sm:w-9/12 max-w-5xl rounded-2xl p-4 flex">
        <Sidebar step={step()} />
        <Form onNext={handleNext} onBack={handleBack} />
      </div>
    </div>
  );
};

export default App;
