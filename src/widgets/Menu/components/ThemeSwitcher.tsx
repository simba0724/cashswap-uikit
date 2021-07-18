import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import FlexSwitcher from "../../../components/Box/FlexSwitcher";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <Button style={{height: 'auto', padding: 0, marginLeft: '16px'}} variant="text" onClick={() => toggleTheme(!isDark)}>
    {/* alignItems center is a Safari fix */}
    <FlexSwitcher alignItems="center">
      {isDark ? <SunIcon color={"textDisabled"} width="24px" /> : <MoonIcon color={"textDisabled"} width="24px" /> }
    </FlexSwitcher>
  </Button>
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
