import { ProgressProps } from "./types";
interface BarProps {
    primary?: boolean;
}
export declare const Bar: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, BarProps, never>;
interface StyledIfoProgressProps {
    variant: ProgressProps["variant"];
    scale: ProgressProps["scale"];
}
declare const StyledIfoProgress: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledIfoProgressProps, never>;
export default StyledIfoProgress;
