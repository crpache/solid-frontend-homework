import { ReduxState } from "../types";

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible;

export const getSelectedCompanyId = (state: ReduxState) =>
  state.selectedCompanyId;

export const getSelectedCompany = (state: ReduxState) =>
  state.companies.find((company) => company.id === state.selectedCompanyId);

export const getCompanies = (state: ReduxState) => state.companies;
