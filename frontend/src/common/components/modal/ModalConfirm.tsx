import { clampText, flexCenter } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import styled from "styled-components";

const Wrapper = styled("div")`
  width: 35vw;
  ${flexCenter}
  flex-direction: column;
  row-gap: 30px;
`;

const Span = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

const ButtonsWrapper = styled("div")`
  width: 100%;
  ${flexCenter}
  column-gap: 10px;
`;

interface ModalConfirmProps {
  text: string;
  buttonOneTitle: string;
  buttonTwoTitle: string;
  onButtonOneClick: () => void;
  onButtonTwoClick: () => void;
}

export const ModalConfirm = ({
  text,
  buttonOneTitle,
  buttonTwoTitle,
  onButtonOneClick,
  onButtonTwoClick,
}: ModalConfirmProps) => {
  return (
    <Wrapper>
      <Span>{text}</Span>
      <ButtonsWrapper>
        <BlackWhiteButton color="white" title={buttonOneTitle} click={onButtonOneClick} />
        <BlackWhiteButton color="black" title={buttonTwoTitle} click={onButtonTwoClick} />
      </ButtonsWrapper>
    </Wrapper>
  );
};
