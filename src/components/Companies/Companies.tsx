import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReduxState, Company } from "../../types";
import { getCompanies } from "../../store/selectors";

import CompanyLink from "../CompanyLink";
import { Title } from "./Companies.style";

type ReduxProps = {
  companies: Array<Company>;
};

export const Companies = ({ companies }: ReduxProps) => (
  <>
    <Title>Your companies</Title>
    {companies.map((company) => (
      <CompanyLink key={company.id} {...company} />
    ))}
  </>
);

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
  })
)(Companies);
