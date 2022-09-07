import { Route } from "@/types";

const ROUTES: Record<string, Route> = {
  home: {
    path: "/",
    name: "home",
    title: "Home",
    componentName: "HomeView",
  },
  about: {
    path: "/demo",
    name: "demo",
    title: "Demo",
    componentName: "DemoView",
  },
};

export default ROUTES;
