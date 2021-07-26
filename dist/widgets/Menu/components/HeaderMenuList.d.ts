import React from "react";
import { PanelProps, PushedProps } from "../types";
import '@szhsin/react-menu/dist/index.css';
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
    showMenu: boolean;
}
declare const HaederMenuList: React.FC<Props>;
export default HaederMenuList;
