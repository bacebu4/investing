import { NavbarLink } from "../components/NavbarLink";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavbarLink>Statistics</NavbarLink>
        </li>
        <li>
          <NavbarLink>What To Buy</NavbarLink>
        </li>
        <li>
          <NavbarLink>FAQ</NavbarLink>
        </li>
      </ul>
    </nav>
  );
};
