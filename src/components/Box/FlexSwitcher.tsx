import styled from "styled-components";
import { flexbox } from "styled-system";
import Box from "./Box";
import { FlexProps } from "./types";

const Flex = styled(Box)<FlexProps>`
  display: flex;
  height: auto !important;
  padding: 0px;
  margin-right: 8px;
  ${flexbox}
`;

export default Flex;
