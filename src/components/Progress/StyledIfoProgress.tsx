import styled from "styled-components";
import { space, variant as StyledSystemVariant } from "styled-system";
import { styleVariants, styleScales } from "./themes";
import { ProgressProps, variants } from "./types";

interface BarProps {
  primary?: boolean;
}

export const Bar = styled.div<BarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.primary ? props.theme.colors.secondary : `${props.theme.colors.secondary}80`)};
  height: 100%;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

interface StyledIfoProgressProps {
  variant: ProgressProps["variant"];
  scale: ProgressProps["scale"];
}

const StyledIfoProgress = styled.div<StyledIfoProgressProps>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  overflow: hidden;
  border-radius: 8px !important;

  ${Bar} {
    border-radius: 8px;
  }

  ${StyledSystemVariant({
    variants: styleVariants,
  })}
  ${StyledSystemVariant({
    prop: "scale",
    variants: styleScales,
  })}
  ${space}
`;

export default StyledIfoProgress;
