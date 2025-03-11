import { Link, NavLink } from "react-router";
import { services } from "~/utils/services";

export function meta() {
  return [
    {
      title: "Legal practice | LAK Advocates",
    },
  ];
}

export default function LegalServices() {
  return (
    <main className="mt-56 lg:mt-64 px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
        Our legal services
      </h1>
      <p className="mt-8 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        incidunt quaerat eligendi cupiditate eos praesentium in impedit aliquid
        quam maiores?
      </p>
      <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 item-list">
        {services.map((item) => (
          <li key={item.id} className="fade-in">
            <NavLink
              to={`/legal-practice/${item.title
                .toLowerCase()
                .split(" ")
                .join("-")}`}
              prefetch="intent"
              className="flex flex-col gap-2"
              viewTransition
            >
              <h2 className="order-1 font-semibold hover:underline">
                {item.title}
              </h2>
              <div className="h-52 lg:h-72 relative after:absolute after:-inset-4 after:w-full after:h-full after:bg-[#B668D6] after:-z-10 ml-4 lg:ml-0">
                <img
                  src={item.imageSrc}
                  alt={`Image of ${item.title}`}
                  className="w-full h-full object-cover hover:scale-105 transition ease-in-out duration-300"
                />
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
