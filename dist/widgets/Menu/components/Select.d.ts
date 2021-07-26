import React from 'react';
import '@szhsin/react-menu/dist/index.css';
export interface SelectProps {
    options: OptionProps[];
    onChange?: (option: number) => void;
}
export interface OptionProps {
    name: string;
    logoURI: any;
}
declare const SelectToken: React.FunctionComponent<SelectProps>;
export default SelectToken;
