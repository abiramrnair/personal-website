import m from "mithril";
import { Header } from "./Header";
import Body from "./Body";

export const Main = {
  view: () => {
    return m("div.main", [m(Header), m(Body)]);
  },
};

export default Main;
