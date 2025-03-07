import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LAK Advocates" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: "Hello from Vercel" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <div className="bg-[url('https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay w-full h-[70vh] lg:h-screen text-white">
        <h1 className="text-4xl text-center font-heading">LAK Advocates</h1>
        <p>
          Advocates, Notaries Public, Commissioners for Oaths, CPS, Patent
          Agents & Arbitrators
        </p>
        <Link
          to="/contact"
          className="bg-brand-purple px-4 py-2 rounded-md text-white"
        >
          Contact us now
        </Link>
      </div>
    </main>
  );
}
