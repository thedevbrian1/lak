import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Form, Link } from "react-router";
import { services } from "~/utils/services";
import { ArrowRight, Mail, Phone } from "lucide-react";
import FormSpacer from "~/components/FormSpacer";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "LAK Advocates" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader() {
  return { message: "Hello from Vercel" };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <BriefServices />
      <Locations />
      <Clients />
      <HomeContact />
    </main>
  );
}

function Hero() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay w-full h-[70vh] lg:h-[90vh] text-white grid place-items-center">
      <div className="flex flex-col items-center gap-4 px-3 md:max-w-xl ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center font-heading">
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
          <li className="flex flex-col gap-2">
            <Link to={`/services/${item.id}`} className="order-1">
              <h3 className=" font-semibold hover:underline">{item.title}</h3>
            </Link>
            <div className="h-52 lg:h-72 relative after:absolute after:-inset-4 after:w-full after:h-full after:bg-[#B668D6] after:-z-10 ml-4 lg:ml-0">
              <img
                src={item.imageSrc}
                alt={`Image of ${item.title}`}
                className="w-full h-full object-cover"
              />
            </div>
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
        <ul className="mt-8 grid grid-cols-3 lg:grid-cols-4 gap-4 max-w-sm lg:max-w-lg mx-auto">
          {locations.map((item) => (
            <li key={item.id} className="aspect-square">
              <img
                src={item.flag}
                alt={`Flag of ${item.country}`}
                className="rounded-full w-full h-full object-cover"
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
          <li key={client.id}>
            <img
              src={client.logo}
              alt={`Logo of ${client.title}`}
              className="w-full h-full"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomeContact() {
  return (
    <div className="mt-24 lg:mt-36 px-6 py-10 md:py-16 lg:py-24 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto bg-[#333333] text-white rounded-lg">
      <h2 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
        Get in touch with us
      </h2>
      <div className="mt-8 lg:mt-12 flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6 mx-auto  lg:max-w-2xl xl:max-w-3xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 flex-1">
          <div className="bg-[#474747] p-6 rounded-md md:h-52">
            <div className="w-12 h-12 grid place-items-center rounded-md bg-[#AA4FCF]">
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
          <div className="bg-[#474747] p-6 rounded-md md:h-52">
            <div className="w-12 h-12 grid place-items-center rounded-md bg-[#AA4FCF]">
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
        <div className="md:w-80 md:max-w-sm mx-auto lg:w-auto lg:max-w-none flex-1">
          <h3 className="text-xl font-semibold">Send us a message</h3>
          <Form method="post" className="mt-6">
            <fieldset className="space-y-4">
              <FormSpacer>
                <Label htmlFor="name">Full name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                />
              </FormSpacer>
              <FormSpacer>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@email.com"
                />
              </FormSpacer>
              <FormSpacer>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+254 712 345 678"
                />
              </FormSpacer>
              <FormSpacer>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" />
              </FormSpacer>
              <Button className="w-full bg-brand-purple hover:bg-purple-500 transition ease-in-out duration-300">
                Send message
              </Button>
            </fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
}
