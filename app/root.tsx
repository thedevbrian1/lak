import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import tailwindStyles from "./styles/app.css?url";
import { Menu, X } from "lucide-react";
import { services } from "./utils/services";
import { useEffect } from "react";
import anchorPolyfill from "@oddbird/css-anchor-positioning/fn";

let navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/legal-practice",
    title: "Legal services",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/posts",
    title: "Posts",
  },
];

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Orelega+One&display=swap",
  },
  {
    rel: "stylesheet",
    href: tailwindStyles,
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !("anchorName" in document.documentElement.style)
    ) {
      anchorPolyfill()
        .then(() => {
          console.log("CSS Anchor Positioning polyfill applied");
        })
        .catch((error) => {
          console.error(
            "Failed to apply CSS Anchor Positioning polyfill:",
            error
          );
        });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="/polyfills/popover.min.js" type="module" defer></script>
      </head>
      <body className="font-body bg-[#f5f5f5] 2xl:max-w-[1400px] mx-auto">
        <header
          className="fixed top-0 left-0 right-0 z-20 2xl:max-w-[1400px] mx-auto backdrop-blur-md"
          style={{ viewTransitionName: "header" }}
        >
          <div className="bg-brand-purple py-2">
            <p className="sr-only">Get in touch</p>
            <address className="flex justify-center flex-wrap gap-x-4 gap-y-2 text-white text-sm lg:text-base">
              <a
                href="tel:+254202177175"
                className="hover:underline transition ease-in-out duration-300"
              >
                +254 202 177 175
              </a>
              <a
                href="tel:+254789741957"
                className="hover:underline transition ease-in-out duration-300"
              >
                +254 789 741 957
              </a>
              <a
                href="mailto:info@lakadvocates.com"
                className="hover:underline transition ease-in-out duration-300"
              >
                info@lakadvocates.com
              </a>
            </address>
          </div>
          <nav className="flex items-center justify-between px-3 md:px-6 bg-gray-200/70">
            <Link to="/">
              <span className="sr-only">Go to home</span>
              <img
                src="/logo.png"
                alt=""
                className="w-[70px] md:w-24 lg:w-28"
              />
            </Link>
            <ul className="hidden lg:flex gap-4">
              {navLinks.map((item, index) => (
                <li key={index} className="menu-list-item">
                  <NavLink
                    to={item.path}
                    prefetch="intent"
                    viewTransition
                    className={({ isActive }) =>
                      `relative ${
                        isActive
                          ? "after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:bg-brand-purple after:h-[2px]"
                          : ""
                      } `
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              id="menu-btn"
              popoverTarget="mobile-menu"
              className="lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Menu />
            </button>
            <div id="mobile-menu" popover="auto" className="p-6 rounded-lg">
              <div className="flex justify-end">
                <button
                  popoverTarget="mobile-menu"
                  popoverTargetAction="hide"
                  className="hover:text-red-500 transition ease-in-out duration-300"
                >
                  <span className="sr-only">Close menu</span>
                  <X />
                </button>
              </div>
              <ul className="space-y-4 mt-4">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `${isActive ? "text-brand-purple" : ""}`
                      }
                      onClick={(e) => {
                        document.getElementById("mobile-menu")?.hidePopover();
                      }}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-24 lg:mt-36 bg-brand-gold py-12 md:py-20 px-6">
          <div className="w-28 lg:w-36 mx-auto">
            <img src="/logo.png" alt="" className="w-full h-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8 md:max-w-xl lg:max-w-2xl mx-auto">
            <div>
              <h2 className="font-heading text-lg lg:text-2xl">Quick links</h2>
              <ul className="space-y-2 mt-4 text-gray-800">
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.path}
                      className="hover:underline transition ease-in-out duration-300"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-lg lg:text-2xl">
                Legal services
              </h2>
              <ul className="mt-4 space-y-2 text-gray-800">
                {services.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to="/services"
                      className="hover:underline transition ease-in-out duration-300"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-lg lg:text-2xl">
                Legal services
              </h2>
              <ul className="mt-4 text-gray-800">
                {services.slice(5).map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to="/services"
                      className="hover:underline transition ease-in-out duration-300"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600">
            Copyright &copy; {new Date().getFullYear()}
          </p>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
