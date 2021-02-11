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
          <li>
            <NavbarLink isActive>Statistics</NavbarLink>
          </li>
          <li>
            <NavbarLink ml="32px">What To Buy</NavbarLink>
          </li>
          <li>
            <NavbarLink ml="32px">FAQ</NavbarLink>
          </li>
        </FlexWrapper>
        <FlexWrapper>
          <li>
            <img width={44} src={userPic} alt="User profile" />
          </li>
          <li>
            <Chevron />
          </li>
          <li>
            <NavbarLink ml="32px">Sign Out</NavbarLink>
          </li>
        </FlexWrapper>
      </NavbarWrapper>
    </nav>
  );
};
