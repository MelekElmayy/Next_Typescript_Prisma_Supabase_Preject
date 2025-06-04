import Container from "@/components/global/Container"; // Correct import
import Logo from "./Logo";
import NavSearch from "./NavSearch";

import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropDown from "./LinksDropDown";

function Navbar() {
  return (
    // In Navbar.tsx (improve flex structure)
    <div className="border-b">
      <Container className="flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <Logo />
          <NavSearch />
        </div>
        <div className="flex items-center gap-4">
          <CartButton />
          <DarkMode />
          <LinksDropDown />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
