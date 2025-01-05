import { clampText, flexCenter } from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { useEffect } from "react";
import styled from "styled-components";

const ModalSection = styled("section")`
  ${flexCenter}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.blackPlaylist};
`;

const ModalContent = styled("div")`
  width: 60%;
  height: 80%;
  padding: 30px;
  border-radius: ${borders.searchBorderRadius};
  background-color: ${colors.blackCover};
  box-shadow: ${shadows.defaultShadow};
  color: ${colors.whiteTotal};

  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const ModalHeader = styled("header")`
  width: 100%;
  position: relative;
  ${flexCenter}
`;

const ModalCloseButtonWrapper = styled("div")`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
  transform: translateY(-50%);
`;

const ModalBody = styled("div")`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const ModalTitle = styled("h2")`
  text-align: center;
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
`;

interface ModalProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, setOpen, title, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <ModalSection>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButtonWrapper>
            <ButtonWithIcon
              size={45}
              title="Закрыть"
              icon="close"
              click={() => setOpen(!isOpen)}
            />
          </ModalCloseButtonWrapper>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalSection>
  );
};
