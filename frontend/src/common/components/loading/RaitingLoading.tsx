import { flexCenter } from "@/common/styles/mixins";
import styled from "styled-components";
import { SquareLoading, TextLoading } from "@/common/components/loading/styles";

const Wrapper = styled("div")`
  ${flexCenter}
  column-gap: 3px;
  user-select: none;
`;

export const RaitingLoading = () => {
  return (
    <Wrapper>
      <SquareLoading $size={25} />
      <TextLoading $height={15} $width={'30px'}/>
    </Wrapper>
  );
};
