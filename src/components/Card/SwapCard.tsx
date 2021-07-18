import React from "react";
import StyledCard from "./SwapStyledCard";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ ribbon, children, ...props }) => {
  return (
    <StyledCard {...props}>
      {ribbon}
      {children}
    </StyledCard>
  );
};
export default Card;
