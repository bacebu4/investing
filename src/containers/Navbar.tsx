import styled from "styled-components";
import { NavbarLink } from "../components/NavbarLink";
import userPic from "../assets/user_pic.png";
import { Chevron } from "../components/Chevron";
import { FlexBox } from "../components/FlexBox";

const NavbarWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 32px;
`;

export const Navbar: React.FC = () => {
  return (
    <nav>
      <NavbarWrapper>
        <FlexBox ai="center">
          <NavbarLink isActive to="/">
            Statistics
          </NavbarLink>
          <NavbarLink ml="32px" to="/">
            What To Buy
          </NavbarLink>
          <NavbarLink ml="32px" to="/faq">
            FAQ
          </NavbarLink>
        </FlexBox>

        <FlexBox ai="center">
          <img width={44} src={userPic} alt="User profile" />
          <Chevron />
          <NavbarLink ml="32px" to="/">
            Sign Out
          </NavbarLink>
        </FlexBox>
      </NavbarWrapper>
    </nav>
  );
};
