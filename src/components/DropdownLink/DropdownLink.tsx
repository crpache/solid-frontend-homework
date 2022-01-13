import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Company, ReduxState } from "../../types";
import { getIsDropdownMenuVisible, getSelectedCompany } from "../../store/selectors";
import { toggleDropdownMenuVisibility } from "../../store/actions";

import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {
  Wrapper,
  NavLink,
  TextWrapper,
  Text,
  SubText,
  Icon
} from "./DropdownLink.style";

type ReduxProps = {
  isDropdownMenuVisible: boolean;
  selectedCompany?: Company
};

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void;
  handleOpenModal: () => void;
};

export const DropdownLink = ({
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
  handleOpenModal,
  selectedCompany,
}: ReduxProps & DispatchProps) => (
  <Wrapper>
    <NavLink onClick={toggleDropdownMenuVisibility} data-test-nav-link>
      <TextWrapper>
        <Text>Elon Musk</Text>
        <SubText>{selectedCompany?.name}</SubText>
      </TextWrapper>

      <Icon className="material-icons-outlined">settings</Icon>
    </NavLink>

    {isDropdownMenuVisible && (
      <DropdownMenu handleOpenModal={handleOpenModal} />
    )}
  </Wrapper>
);

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompany: getSelectedCompany
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink);
