import { Link } from "react-router";
import { services } from "~/utils/services";

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
      <ul className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item) => (
          <li key={item.id} className="flex flex-col gap-2">
            <Link
              to={`/legal-practice/${item.title.toLowerCase()}`}
              prefetch="intent"
              className="order-1"
            >
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
    </main>
  );
}
