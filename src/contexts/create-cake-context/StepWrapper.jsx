import React from "react";

const StepWrapper = ({ currentStep, steps, ...props }) => {
  const currentStepContent = steps[currentStep].content;

  return <div>{currentStepContent}</div>;
};

export default StepWrapper;
