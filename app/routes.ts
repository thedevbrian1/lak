import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("legal-practice", "routes/legal-practice/services.tsx"),
  route("legal-practice/:title", "routes/legal-practice/service.tsx"),
] satisfies RouteConfig;
