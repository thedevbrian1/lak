import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("legal-practice", "routes/legal-practice/services.tsx"),
  route("legal-practice/:slug", "routes/legal-practice/service.tsx"),
  route("posts", "routes/blog/posts.tsx"),
  route("posts/:slug", "routes/blog/post.tsx"),
  route("partners/:slug", "routes/partner.tsx"),
] satisfies RouteConfig;
