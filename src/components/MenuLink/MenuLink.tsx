import { Wrapper, Label } from "./MenuLink.style";

type Props = {
  text: string;
  icon: string;
  onClick?: () => void;
  red?: boolean;
};

const MenuLink = ({ icon, text, onClick, red }: Props) => (
  <Wrapper onClick={onClick} red={red} >
    <i className="material-icons-outlined">{icon}</i>
    <Label>{text}</Label>
  </Wrapper>
);

export default MenuLink;
