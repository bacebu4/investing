import React from "react";
import { FlexBox } from "./FlexBox";

interface ChevronProps {
  ml?: string;
}

export const Chevron: React.FC<ChevronProps> = ({ ml }) => {
  return (
    <FlexBox ml={ml} jc="center" ai="center">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0953 12.9524L16 19.0476L9.90479 12.9524"
          stroke="#A4A2C1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </FlexBox>
  );
};
