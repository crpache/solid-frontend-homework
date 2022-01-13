import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReduxState, Company } from "../../types";
import { getCompanies, getSelectedCompanyId } from "../../store/selectors";
import { setSelectedCompanyId } from "../../store/actions";

import CompanyLink from "../CompanyLink";
import { Title } from "./Companies.style";

type ReduxProps = {
  companies: Array<Company>;
  selectedCompanyId: number | null;
};

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void;
};

export const Companies = ({
  companies,
  selectedCompanyId,
  setSelectedCompanyId,
}: ReduxProps & DispatchProps) => (
  <>
    <Title>Your companies</Title>
    {companies.map((company) => (
      <CompanyLink
        key={company.id}
        id={company.id}
        name={company.name}
        onClick={setSelectedCompanyId}
        isSelected={selectedCompanyId === company.id}
      />
    ))}
  </>
);

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
    selectedCompanyId: getSelectedCompanyId,
  }),
  { setSelectedCompanyId }
)(Companies);
