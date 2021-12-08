import theme from "vitepress/dist/client/theme-default";
import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components";
import DzButton from "../../../src/components/button/button";

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.component(DzButton.name, DzButton);
    registerComponents(app);
  },
};
