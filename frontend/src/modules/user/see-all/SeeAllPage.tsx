import { changeTitle } from "@/common/helpers/changeTitle";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SeeAllSection } from "@/modules/user/see-all/styles";

export const SeeAllPage = () => {
  useEffect(() => {
    scrollToTop();
    changeTitle("search");
  }, []);
  return (
    <SeeAllSection>
      <Outlet />
    </SeeAllSection>
  );
};
