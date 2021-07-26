import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import { MobileMenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  showMenu: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{showMenu: boolean}>`
  transition: opacity 0.3s;
  transition: auto 0.3s ease-out;
  opacity: ${({ showMenu }) => (showMenu ? 1 : 0)};
  flex-direction: column;
  width: 100%;
  height: auth;
  position: fixed;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.nav.background};
  z-index: 1;
`;

const MobileMenuList: React.FC<Props> = ({ isPushed, pushNav, isMobile, links, showMenu }) => {
  const location = useLocation();
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  if(isMobile) {
    return (
      <Container showMenu={showMenu}>
        {links.map((entry) => {
          const Icon = Icons[entry.icon];
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

          return (
            <MobileMenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
              <MenuLink href={entry.href} onClick={handleClick}>
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                {entry.status && (
                  <LinkStatus color={entry.status.color} fontSize="14px">
                    {entry.status.text}
                  </LinkStatus>
                )}
              </MenuLink>
            </MobileMenuEntry>
          );
        })}
      </Container>
    );
  } else {
    return (<></>)
  }
};

export default MobileMenuList;
