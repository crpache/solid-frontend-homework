import MenuLink from "../MenuLink";
import Companies from "../Companies";
import { Wrapper, Separator } from "./DropdownMenu.style";

type props = {
  handleOpenModal: () => void;
};

const DropdownMenu = ({ handleOpenModal }: props) => (
  <Wrapper>
    <Companies />
    <MenuLink text="Get the mobile app" icon="phone_iphone" />
    <MenuLink text="Community" icon="people" />
    <MenuLink text="Knowledge base" icon="book" />

    <Separator />

    <MenuLink text="Settings" icon="settings" />
    <MenuLink
      text="Connect to wallet"
      icon="account_balance_wallet"
      onClick={handleOpenModal}
    />
    <MenuLink text="Log out" icon="exit_to_app" red />
  </Wrapper>
);

export default DropdownMenu;
