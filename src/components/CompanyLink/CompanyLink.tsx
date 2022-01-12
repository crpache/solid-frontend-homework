import { Company } from "../../types";
import { Label, SelectedIcon } from "./CompanyLink.style";

const CompanyLink = ({ name, id, onClick, isSelected }: Company) => (
  <Label onClick={() => onClick?.(id)} isSelected={isSelected}>
    {name}
    {isSelected && <SelectedIcon />}
  </Label>
);

export default CompanyLink;
