import React from "react";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    showMenu: boolean;
}
declare const MobileMenuList: React.FC<Props>;
export default MobileMenuList;
