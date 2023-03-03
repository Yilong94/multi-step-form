import { Component } from "solid-js";
import BgSidebarDesktop from "../../assets/bg-sidebar-desktop.svg";

const StepIcon: Component<{ num: number; selected?: boolean }> = (props) => {
  return (
    <div
      class={`border rounded-full h-9 w-9 flex justify-center items-center font-semibold ${
        props.selected
          ? "border-light-blue text-marine-blue bg-light-blue"
          : "border-white text-white"
      }`}
    >
      {props.num}
    </div>
  );
};

const StepContent: Component<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div>
      <div class="text-white font-thin">{subtitle}</div>
      <div class="text-white font-bold">{title}</div>
    </div>
  );
};

const Sidebar: Component<{ step: number }> = (props) => {
  return (
    <div class="relative">
      <BgSidebarDesktop />
      <div class="absolute top-0 left-0 p-8 space-y-8">
        <div class="flex items-center space-x-4">
          <StepIcon num={1} selected={props.step === 1} />
          <StepContent title="YOUR INFO" subtitle="STEP 1" />
        </div>
        <div class="flex items-center space-x-4">
          <StepIcon num={2} selected={props.step === 2} />
          <StepContent title="SELECT PLAN" subtitle="STEP 2" />
        </div>
        <div class="flex items-center space-x-4">
          <StepIcon num={3} selected={props.step === 3} />
          <StepContent title="ADD-ONS" subtitle="STEP 3" />
        </div>
        <div class="flex items-center space-x-4">
          <StepIcon num={4} selected={props.step === 4} />
          <StepContent title="SUMMARY" subtitle="STEP 4" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
