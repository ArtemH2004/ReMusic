import { changeTitle } from "@/common/helpers/changeTitle";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { useEffect } from "react";

export const SearchPage = () => {
  useEffect(() => {
    scrollToTop();
    changeTitle("search");
  }, []);

  return <div>SearchPage</div>;
};
