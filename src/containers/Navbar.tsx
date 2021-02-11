import styled from "styled-components";
import { NavbarLink } from "../components/NavbarLink";
import userPic from "../assets/user_pic.png";
import { Chevron } from "../components/Chevron";

const NavbarWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar: React.FC = () => {
  return (
    <nav>
      <NavbarWrapper>
        <FlexWrapper>
          <NavbarLink isActive>Statistics</NavbarLink>
          <NavbarLink ml="32px">What To Buy</NavbarLink>
          <NavbarLink ml="32px">FAQ</NavbarLink>
        </FlexWrapper>

        <FlexWrapper>
          <img width={44} src={userPic} alt="User profile" />
          <Chevron />
          <NavbarLink ml="32px">Sign Out</NavbarLink>
        </FlexWrapper>
      </NavbarWrapper>
    </nav>
  );
};
