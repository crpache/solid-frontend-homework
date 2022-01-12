import { Company } from "../../types";
import { Label } from "./CompanyLink.style";

const CompanyLink = ({ name }: Company) => <Label>{name}</Label>;

export default CompanyLink;
