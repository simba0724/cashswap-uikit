import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  showMenu: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: contents;
`;

const HeadMenu = styled(Menu)`
  border-radius: 19px;
  background-color: ${({ theme }) => theme.nav.background};
  padding: 0px;
  border: solid 1px #383241;
`;

const HeadMenuItem = styled(MenuItem)<{ isActive: boolean }>`
  color: #F4EEFF;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.tertiary : "transparent")};
  padding: 0;
  &:hover {
    background-color: #353547;
  }
  border-radius: 19px;
`;

const HeadMenuLink = styled(MenuLink)`
  padding: 10px 20px;
`

const HaederMenuList: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  if(!isMobile) {
    return (
      <Container>
        {links.map((entry) => {
          const Icon = Icons[entry.icon];
          const iconElement = <Icon width="24px" mr="8px" />;
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

          if (entry.items) {
            return(
              <HeadMenu  menuButton={<MenuEntry isActive={entry.items.some((item) => item.href === location.pathname)}>{entry.label}</MenuEntry>}>
                {entry.items.map((item) => (
                  <HeadMenuItem isActive={item.href === location.pathname}>
                    <HeadMenuLink href={item.href}>
                      {item.label}
                    </HeadMenuLink>
                  </HeadMenuItem>
                ))}
              </HeadMenu>
            )
          }

          return (
            <MenuEntry key={entry.label} isActive={entry.href === location.pathname}>
              <MenuLink href={entry.href}>
                {entry.label}
              </MenuLink>
            </MenuEntry>
          );
        })}
      </Container>
    );
  } else {
    return (<></>)
  }
};

export default HaederMenuList;