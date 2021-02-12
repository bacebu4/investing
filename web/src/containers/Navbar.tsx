import styled from "styled-components";
import { NavbarLink } from "../components/NavbarLink";
import userPic from "../assets/user_pic.png";
import { Chevron } from "../components/Chevron";
import { FlexBox } from "../components/FlexBox";
import { useLocation } from "react-router-dom";

const NavbarWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 32px;
`;

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav>
      <NavbarWrapper>
        <FlexBox ai="center">
          <NavbarLink isActive={location.pathname === "/"} to="/">
            Statistics
          </NavbarLink>

          <NavbarLink ml="32px" to="/">
            Recommendations
          </NavbarLink>

          <NavbarLink
            isActive={location.pathname === "/faq"}
            ml="32px"
            to="/faq"
          >
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
