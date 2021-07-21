import React from "react";
import StyledIfoProgress, { Bar } from "./StyledIfoProgress";
import ProgressBunnyWrapper from "./ProgressBunnyWrapper";
import { ProgressBunny } from "../Svg";
import { ProgressProps, variants, scales } from "./types";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const IfoProgress: React.FC<ProgressProps> = ({
  variant = variants.ROUND,
  scale = scales.MD,
  primaryStep = 0,
  secondaryStep = null,
  showProgressBunny = false,
}) => {
  return (
    <StyledIfoProgress variant={variant} scale={scale}>
      {showProgressBunny && (
        <ProgressBunnyWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
          <ProgressBunny />
        </ProgressBunnyWrapper>
      )}
      <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
      {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
    </StyledIfoProgress>
  );
};

export default IfoProgress;
