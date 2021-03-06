import React from "react";
import { DefaultTheme } from "styled-components";
import { Colors } from "../../../theme/types";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    isOpen?: boolean;
    theme: DefaultTheme;
}
declare const MenuEntry: import("styled-components").StyledComponent<React.ForwardRefExoticComponent<import("@szhsin/react-menu").MenuButtonProps & React.RefAttributes<HTMLButtonElement>>, DefaultTheme, Props, never>;
declare const MobileMenuEntry: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
declare const LinkStatus: import("styled-components").StyledComponent<"div", DefaultTheme, import("../../../components/Text").TextProps & {
    color: keyof Colors;
}, never>;
declare const LinkLabelMemo: React.MemoExoticComponent<import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>>;
export { MobileMenuEntry, MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
