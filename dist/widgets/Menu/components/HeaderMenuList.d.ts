import React from "react";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    showMenu: boolean;
}
declare const HaederMenuList: React.FC<Props>;
export default HaederMenuList;
