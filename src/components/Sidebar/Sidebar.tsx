import BgSidebarDesktop from "../../assets/bg-sidebar-desktop.svg";

const StepIcon = ({ num }: { num: number }) => {
  return (
    <div class="border border-white rounded-full h-9 w-9 flex justify-center items-center text-white font-semibold">
      {num}
    </div>
  );
};

const StepContent = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <div class="text-white font-thin">{subtitle}</div>
      <div class="text-white font-bold">{title}</div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div class="relative">
      <BgSidebarDesktop />
      <div class="absolute top-0 left-0 p-8 space-y-8">
        <div class="flex items-center space-x-4">
          <StepIcon num={1} />
          <StepContent title="YOUR INFO" subtitle="STEP 1" />
        </div>
        <div class="flex items-center space-x-4">
          <StepIcon num={2} />
          <StepContent title="SELECT PLAN" subtitle="STEP 2" />
        </div>
        <div class="flex items-center space-x-4">
          <StepIcon num={3} />
          <StepContent title="ADD-ONS" subtitle="STEP 3" />
        </div>
        <div class="flex items-center space-x-4">
          <StepIcon num={4} />
          <StepContent title="SUMMARY" subtitle="STEP 4" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
