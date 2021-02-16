import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import { GRAY, PURPLE } from "../utils/colors";
import marked from "../assets/marked.svg";
import unmarked from "../assets/unmarked.svg";

type SearchResultCardProps = {
  name: string;
  isSelected: boolean;
};

const CardWrapper = styled(FlexBox)<{ isSelected?: boolean }>`
  padding: 12px 16px;
  border-radius: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? PURPLE : "000000")}1a;

  &:hover {
    background-color: ${GRAY}1a;
  }
`;

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  name,
  isSelected,
}) => {
  return (
    <CardWrapper isSelected={isSelected} ai="center" jc="space-between">
      {name}
      {isSelected ? (
        <img width={20} src={marked} alt="marked" />
      ) : (
        <img width={20} src={unmarked} alt="unmarked" />
      )}
    </CardWrapper>
  );
};
