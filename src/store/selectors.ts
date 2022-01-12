import { ReduxState } from "../types";

export const getIsDropdownMenuVisible = (state: ReduxState) =>
  state.isDropdownMenuVisible;

export const getSelectedCompany = (state: ReduxState) =>
  state.selectedCompanyId;

export const getCompanies = (state: ReduxState) => state.companies;
