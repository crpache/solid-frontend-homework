import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReduxState, Company } from "../../types";
import { getCompanies, getSelectedCompany } from "../../store/selectors";
import { setSelectedCompanyId } from "../../store/actions";

import CompanyLink from "../CompanyLink";
import { Title } from "./Companies.style";

type ReduxProps = {
  companies: Array<Company>;
  selectedCompany: number | null;
};

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void;
};

export const Companies = ({
  companies,
  selectedCompany,
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
        isSelected={selectedCompany === company.id}
      />
    ))}
  </>
);

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    companies: getCompanies,
    selectedCompany: getSelectedCompany,
  }),
  { setSelectedCompanyId }
)(Companies);
