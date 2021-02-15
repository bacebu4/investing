import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { NavbarLink } from "../components/NavbarLink";
import { FlexBox } from "../components/FlexBox";
import { SettingsButton } from "../components/SettingsButton";

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

          <NavbarLink
            isActive={location.pathname === "/recommendations"}
            ml="32px"
            to="/recommendations"
          >
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
          <SettingsButton />

          <NavbarLink ml="32px" to="/">
            Sign Out
          </NavbarLink>
        </FlexBox>
      </NavbarWrapper>
    </nav>
  );
};
