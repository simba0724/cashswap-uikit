import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
  showMenu: boolean;
}

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

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

          return (
            <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
              <MenuLink href={entry.href} onClick={handleClick}>
                <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                {entry.status && (
                  <LinkStatus color={entry.status.color} fontSize="14px">
                    {entry.status.text}
                  </LinkStatus>
                )}
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
