import { Component } from "solid-js";
import Button, { ButtonType } from "../Button";

const Form: Component<{ onNext: () => void; onBack: () => void }> = (props) => {
  return (
    <div class="grow">
      <Button
        type={ButtonType.PRIMARY}
        text="Next Step"
        onClick={() => props.onNext()}
      />
      <Button
        type={ButtonType.SECONDARY}
        text="Go Back"
        onClick={() => props.onBack()}
      />
    </div>
  );
};

export default Form;
