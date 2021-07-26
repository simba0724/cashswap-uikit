import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import HeaderMenuList from "./components/HeaderMenuList";
import MobileMenuList from "./components/MobileMenuList";

import UserBlock from "./components/UserBlock";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { NavProps } from "./types";
import Avatar from "./components/Avatar";
import SelectToken from "./components/Select";
import Button from "../../components/Button/Button";

import { HamburgerIcon } from "./icons";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";

const Tokenlist = [
  {
    "name": "Ethereum",
    "symbol": "Ethereum",
    "logoURI": "/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png"
  },
  {
    "name": "BSC",
    "symbol": "BSC",
    "logoURI": "/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png"
  }
]

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
// 383241
const StyledNav = styled.nav<{}>`
  position: fixed;
  top: 0;
  left: 0;
  transition: top 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 1px rgba(133, 133, 133, 0.1);
  z-index: 20;isDark
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${MENU_HEIGHT}px;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;
  display: none;
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(false);
  const refPrevOffset = useRef(window.pageYOffset);
  const [index, setIndex] = useState(0);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav>
        <Flex>
          <Logo
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
          />
          <HeaderMenuList
            isPushed={isPushed}
            isMobile={isMobile}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            cakePriceUsd={cakePriceUsd}
            pushNav={setIsPushed}
            links={links}
          />
        </Flex>
        {!!login && !!logout && (
          <Flex>
            <SelectToken options={Tokenlist} onChange={setIndex}/>
            <UserBlock account={account} login={login} logout={logout} />
            {isMobile && <Button style={{height: 'auto', padding: 0, marginLeft: '16px', backgroundColor: 'transparent'}} aria-label="Toggle menu" mr="24px" onClick={() => {setShowMenu(!showMenu)}}><HamburgerIcon width="24px" color="textSubtle" /></Button>}
          </Flex>
        )}
      </StyledNav>
      <MobileMenuList 
        isPushed={isPushed}
        isMobile={isMobile}
        showMenu={showMenu}
        isDark={isDark}
        toggleTheme={toggleTheme}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
        cakePriceUsd={cakePriceUsd}
        pushNav={setIsPushed}
        links={links}
      />
      <BodyWrapper>
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
