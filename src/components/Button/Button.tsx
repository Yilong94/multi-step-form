import { Component, JSX } from "solid-js";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

const Button: Component<{
  type: ButtonType;
  text: string;
  onClick: JSX.EventHandler<HTMLButtonElement, Event>;
}> = (props) => {
  return (
    <>
      {props.type === ButtonType.PRIMARY && (
        <button
          class="rounded-xl w-32 py-3 font-semibold bg-marine-blue text-white"
          onClick={props.onClick}
        >
          {props.text}
        </button>
      )}
      {props.type === ButtonType.SECONDARY && (
        <button
          class="rounded-xl w-32 py-3 font-semibold text-cool-gray"
          onClick={props.onClick}
        >
          {props.text}
        </button>
      )}
    </>
  );
};

export default Button;
