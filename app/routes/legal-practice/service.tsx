import { services } from "~/utils/services";
import type { Route } from "./+types/service";

export async function loader({ params }: Route.LoaderArgs) {
  let title = params.title;

  let service = services.find(
    (item) => item.title.toLowerCase().trim() === title.trim()
  );

  return { service };
}

export default function Service({ loaderData }: Route.ComponentProps) {
  let { service } = loaderData;

  return (
    <main className="mt-56 lg:mt-64 px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
        {service?.title}
      </h1>
      <img
        src={service?.imageSrc}
        alt=""
        className="mt-8 rounded-lg lg:max-w-xl xl:max-w-2xl mx-auto"
      />
      <div>{service?.description}</div>
    </main>
  );
}
