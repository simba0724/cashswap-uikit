import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Text } from '../../../components/Text'
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const SelectMenu = styled(Menu)`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.nav.background};
  padding: 0px;
  border: solid 1px #383241;
`;

const TokenImg = styled.div`
  width: 38px;
  height: 32px;
  padding-left: 5px;
  margin-right: 16px;
  border-radius: 16px;
`

const SelectMenuItem = styled(MenuItem)<{ isActive: boolean }>`
  color: #F4EEFF;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.tertiary : "transparent")};
  padding: 5px;
  &:hover {
    background-color: #353547;
  }
  border-radius: 16px;
`;

export interface SelectProps {
  options: OptionProps[]
  onChange?: (option: number) => void
}

export interface OptionProps {
  name: string
  logoURI: any
}

const SelectToken: React.FunctionComponent<SelectProps> = ({ options }) => {
  const [index, setIndex] = useState(0);

  return (
    <SelectMenu  menuButton={<TokenImg><img style={{width: '32px', height: '32px'}} src={options[index].logoURI} alt={options[index].name} /></TokenImg>}>
      {options.map((item, i) => (
        <SelectMenuItem isActive={i === index} onClick={() => setIndex(i)}>
          <img style={{width: '32px', height: '32px' , marginRight: '13px', float: 'left'}} src={item.logoURI} alt={item.name} />
          {item.name}
        </SelectMenuItem>
      ))}
    </SelectMenu>
  )
}

export default SelectToken