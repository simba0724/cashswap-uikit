import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  isOpen?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: theme.colors.textSubtle;
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled(MenuButton)<Props>`
  cursor: pointer;
  align-items: center;
  padding: 5px 20px;
  font-size: 16px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.tertiary : "transparent")};
  border: 0px;
  color: ${({ theme }) => theme.colors.textSubtle};
  border-radius: 19px;

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;

const MobileMenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT/2}px;
  margin: 0 0;
  border-radius: ${MENU_ENTRY_HEIGHT / 4}px;
  padding: ${({ secondary }) => (secondary ? "0" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.tertiary : "transparent")};
  color: ${({ theme }) => theme.colors.textSubtle};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;

MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MobileMenuEntry, MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };