import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Form, isRouteErrorResponse, Link, NavLink } from "react-router";
import { services } from "~/utils/services";
import { ArrowRight, Mail, Phone, RotateCcw } from "lucide-react";
import FormSpacer from "~/components/FormSpacer";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { ErrorIllustration } from "~/components/Icon";
import {
  badRequest,
  trimString,
  validateEmail,
  validatePhone,
  validateText,
} from "~/.server/validation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LAK Advocates" },
    {
      name: "description",
      content:
        "Lumallas Achieng' & Kavere Advocates (LAK Advocates) is a full-service law firm in Nairobi, Kenya, offering expertise in dispute resolution, international arbitration, conveyancing, commercial law, and company secretarial services. Our mission is to understand our clients' objectives and exceed their expectations with high-quality, innovative, and result-oriented legal solutions.",
    },
  ];
}

export function loader() {
  return { message: "Hello from Vercel" };
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();
  let name = String(formData.get("name"));
  let email = String(formData.get("email"));
  let phone = String(formData.get("phone"));
  let message = String(formData.get("message"));

  let trimmedPhone = trimString(phone);

  let fieldErrors = {
    name: validateText(name),
    email: validateEmail(email),
    phone: validatePhone(trimmedPhone),
    message: validateText(message),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors });
  }
  return null;
}

export default function Home({ actionData }: Route.ComponentProps) {
  let fieldErrors;
  if (
    actionData &&
    typeof actionData === "object" &&
    "fieldErrors" in actionData
  ) {
    fieldErrors = actionData?.fieldErrors;
  }
  return (
    <main className="">
      <Hero />
      <BriefServices />
      <Locations />
      <Clients />
      <HomeContact fieldErrors={fieldErrors} />
    </main>
  );
}

function Hero() {
  // https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
  return (
    <div className="pt-32 md:pt-20 xl:pt-40 bg-[url('https://res.cloudinary.com/organic-zones/image/upload/q_auto,f_auto,w_600/v1741703207/lak/team2_kli9zs.jpg')] md:bg-[url('https://res.cloudinary.com/organic-zones/image/upload/q_auto,f_auto,w_900/v1741703207/lak/team2_kli9zs.jpg')] lg:bg-[url('https://res.cloudinary.com/organic-zones/image/upload/q_auto,f_auto,w_1200/v1741703207/lak/team2_kli9zs.jpg')] 2xl:bg-[url('https://res.cloudinary.com/organic-zones/image/upload/q_auto,f_auto/v1741703207/lak/team2_kli9zs.jpg')] bg-cover bg-top bg-no-repeat bg-black/40 bg-blend-overlay w-full min-h-[90vh] md:h-[75vh] lg:h-screen text-white grid place-items-center">
      <div className="flex flex-col items-center gap-4 px-3 md:max-w-xl ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
          LAK Advocates
        </h1>
        <p className="text-center md:text-xl text-pretty">
          Advocates, Notaries Public, Commissioners for Oaths, CPS, Patent
          Agents & Arbitrators
        </p>
        <Link
          to="/contact"
          className="bg-brand-purple hover:bg-purple-500 transition ease-in-out duration-300 px-4 py-2 rounded-md text-white"
        >
          Contact us now
        </Link>
      </div>
    </div>
  );
}

function BriefServices() {
  return (
    <div className="mt-24 lg:mt-36 px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h2 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
        Services provided by LAK Advocates
      </h2>
      <p className="mt-4 text-center">
        LAK has a very experienced team which brings a diverse set of skills and
        knowledge to the table
      </p>

      <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item) => (
          <li key={item.id} className="item-list fade-in">
            <NavLink
              to={`/legal-practice/${item.title
                .toLowerCase()
                .split(" ")
                .join("-")}`}
              prefetch="intent"
              className="flex flex-col gap-2"
              viewTransition
            >
              <h3 className="order-1 font-semibold hover:underline">
                {item.title}
              </h3>
              <div className="h-52 lg:h-72 relative after:absolute after:-inset-4 after:w-full after:h-full after:bg-[#B668D6] after:-z-10 after:rounded-lg ml-4 lg:ml-0">
                <img
                  src={item.imageSrc}
                  alt={`Image of ${item.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition ease-in-out duration-300 rounded-lg"
                  loading="lazy"
                />
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8">
        <Link
          to="/services"
          className="underline flex gap-2 items-center group"
        >
          View all services{" "}
          <span className="group-hover:translate-x-1 transition ease-out duration-300">
            <ArrowRight />
          </span>
        </Link>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/contact"
          className="capitalize bg-brand-purple hover:bg-purple-500 transition ease-in-out duration-300 px-4 py-2 rounded-md text-white"
        >
          Contact us now
        </Link>
      </div>
    </div>
  );
}

function Locations() {
  let locations = [
    {
      country: "Kenya",
      flag: "/Flag_of_Kenya.png",
      id: 1,
    },
    {
      country: "Uganda",
      flag: "/Flag_of_Uganda.png",
      id: 2,
    },
    {
      country: "Tanzania",
      flag: "/Flag_of_Tanzania.webp",
      id: 3,
    },
    {
      country: "France",
      flag: "/Flag_of_France.png",
      id: 4,
    },
    {
      country: "South Africa",
      flag: "/Flag_of_South_Africa.png",
      id: 5,
    },
    {
      country: "Congo",
      flag: "/Flag_of_the_Democratic_Republic_of_the_Congo.png",
      id: 6,
    },
    {
      country: "England",
      flag: "/Flag_of_the_United_Kingdom.png",
      id: 7,
    },
    {
      country: "Rwanda",
      flag: "/Flag_of_Rwanda.png",
      id: 8,
    },
  ];
  return (
    <div className="mt-24 lg:mt-36  py-24  bg-[url('https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-black/50 bg-blend-overlay">
      <div className="px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto text-white">
        <h2 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
          LAK is international
        </h2>
        <p className="text-center text-lg lg:text-xl mt-4">
          Found in{" "}
          <span className="font-bold font-heading text-2xl text-orange-500">
            50+
          </span>{" "}
          countries
        </p>
        <ul className="mt-8 grid grid-cols-3 md:grid-cols-4 gap-4 max-w-[280px]  lg:max-w-lg mx-auto">
          {locations.map((item) => (
            <li key={item.id} className="aspect-square fade-in">
              <img
                src={item.flag}
                alt={`Flag of ${item.country}`}
                className="rounded-full w-full h-full object-cover"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Clients() {
  let clients = [
    {
      title: "Coat of arms",
      logo: "/coat_of_arms.png",
      id: 1,
    },
    {
      title: "Law Society of Kenya",
      logo: "/lsk.png",
      id: 2,
    },
    {
      title: "FIDA Kenya",
      logo: "/fida_kenya.png",
      id: 3,
    },
  ];

  return (
    <div className="mt-24 lg:mt-36 px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h2 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
        Our major clients
      </h2>
      <ul className="grid grid-cols-3 gap-4 lg:gap-6 mt-8 lg:max-w-xl mx-auto">
        {clients.map((client) => (
          <li key={client.id} className="fade-in">
            <img
              src={client.logo}
              alt={`Logo of ${client.title}`}
              className="w-full h-full"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomeContact({ fieldErrors }) {
  return (
    <div className="mt-24 lg:mt-36 px-6  md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <div className="bg-gray-200 dark:bg-[#333333] dark:text-white py-14 md:py-16 lg:py-24 rounded-lg">
        <h2 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
          Get in touch with us
        </h2>
        <div className="mt-8 lg:mt-12 flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6 mx-auto  lg:max-w-2xl xl:max-w-3xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 flex-1 ">
            <div className="bg-gray-100 dark:bg-[#474747] p-6 rounded-md md:h-52">
              <div className="w-12 h-12 grid place-items-center rounded-md bg-[#AA4FCF] text-white">
                <Phone />
              </div>
              <h3 className="text-xl font-semibold mt-4">Call us</h3>
              <address className="flex flex-col gap-2 mt-4">
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
              </address>
            </div>
            <div className="bg-gray-100 dark:bg-[#474747] p-6 rounded-md md:h-52">
              <div className="w-12 h-12 grid place-items-center rounded-md bg-[#AA4FCF] text-white">
                <Mail />
              </div>
              <h3 className="text-xl font-semibold mt-4">Email us</h3>
              <address className="mt-4">
                <a
                  href="mailto:info@lakadvocates.com"
                  className="hover:underline transition ease-in-out duration-300"
                >
                  info@lakadvocates.com
                </a>
              </address>
            </div>
          </div>
          <span className="self-center">or</span>
          <div className="md:w-96 md:mx-auto lg:w-auto  flex-1 bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Send us a message</h3>
            <Form method="post" className="mt-6">
              <fieldset className="space-y-4">
                <FormSpacer>
                  <Label htmlFor="name" className="flex gap-2">
                    Full name{" "}
                    {fieldErrors?.name ? (
                      <span className="text-red-500">{fieldErrors.name}</span>
                    ) : (
                      ""
                    )}
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className={`border border-gray-400 focus-visible:ring-2 focus-visible:ring-brand-purple ${
                      fieldErrors?.name ? "border-red-500" : ""
                    }`}
                  />
                </FormSpacer>
                <FormSpacer>
                  <Label htmlFor="email" className="flex gap-2">
                    Email{" "}
                    {fieldErrors?.email ? (
                      <span className="text-red-500">{fieldErrors.email}</span>
                    ) : (
                      ""
                    )}
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@email.com"
                    className={`border border-gray-400 focus-visible:ring-2 focus-visible:ring-brand-purple ${
                      fieldErrors?.email ? "border-red-500" : ""
                    }`}
                  />
                </FormSpacer>
                <FormSpacer>
                  <Label htmlFor="phone" className="flex gap-2">
                    Phone{" "}
                    {fieldErrors?.phone ? (
                      <span className="text-red-500">{fieldErrors.phone}</span>
                    ) : (
                      ""
                    )}
                  </Label>
                  <Input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="+254 712 345 678"
                    className={`border border-gray-400 focus-visible:ring-2 focus-visible:ring-brand-purple ${
                      fieldErrors?.phone ? "border-red-500" : ""
                    }`}
                  />
                </FormSpacer>
                <FormSpacer>
                  <Label htmlFor="message" className="flex gap-2">
                    Message{" "}
                    {fieldErrors?.message ? (
                      <span className="text-red-500">
                        {fieldErrors.message}
                      </span>
                    ) : (
                      ""
                    )}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    className={`border border-gray-400 focus-visible:ring-2 focus-visible:ring-brand-purple ${
                      fieldErrors?.message ? "border-red-500" : ""
                    }`}
                  />
                </FormSpacer>
                <Button className="w-full bg-brand-purple hover:bg-purple-500 transition ease-in-out duration-300">
                  Send message
                </Button>
              </fieldset>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    console.error(error);
    return (
      <div className="pt-52 lg:pt-60 px-6 flex flex-col items-center md:max-w-xl lg:max-w-2xl mx-auto">
        <div className="w-48 lg:w-72">
          <ErrorIllustration />
        </div>
        <h1 className="font-bold text-3xl lg:text-4xl text-red-500 mt-8 text-center">
          {error.status} {error.statusText}
        </h1>
        <p className="text-red-500 text-center mt-4">{error.data}</p>
        <div className="has-[:active]:scale-[0.97] transition ease-out duration-300 mt-4">
          <Link
            to="."
            prefetch="intent"
            className="bg-brand-purple hover:bg-purple-500 transition ease-in-out duration-300 px-4 py-2 rounded-lg text-white  flex gap-2 items-center"
          >
            <RotateCcw />
            Try again
          </Link>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    console.error(error);
    return (
      <div className="pt-32 lg:pt-60 px-6 flex flex-col items-center lg:max-w-2xl mx-auto">
        <div className="w-48 lg:w-72">
          <ErrorIllustration />
        </div>
        <h1 className="font-bold text-center text-3xl lg:text-4xl text-red-500 mt-8">
          Error
        </h1>
        <p className="text-red-500 text-center mt-4">{error.message}</p>
        <div className="has-[:active]:scale-[0.97] transition ease-out duration-300 mt-4">
          <Link
            to="."
            prefetch="intent"
            className="bg-brand-purple hover:bg-purple-500 transition ease-in-out duration-300 px-4 py-2 rounded-lg text-white  flex gap-2 items-center"
          >
            <RotateCcw />
            Try again
          </Link>
        </div>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
