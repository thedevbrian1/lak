import { services } from "~/utils/services";
import type { Route } from "./+types/service";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
  let title = params.title;

  let service = services.find(
    (item) =>
      item.title.toLowerCase().trim().split(" ").join("-") === title.trim()
  );

  return { service };
}

export default function Service({ loaderData }: Route.ComponentProps) {
  let { service } = loaderData;
  let navigate = useNavigate();

  return (
    <main className="mt-56 px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto service-detail">
      <Button
        className="flex items-center gap-2 bg-brand-purple hover:bg-purple-500 active:scale-[.97] transition ease-in-out duration-300"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft /> Back to services
      </Button>
      <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
        {service?.title}
      </h1>
      <div className="mt-8  lg:max-w-xl xl:max-w-2xl aspect-video mx-auto">
        <img
          src={service?.imageSrc}
          alt=""
          className="w-full h-full rounded-lg object-cover object-center"
        />
      </div>
      <div className="prose">{service?.description}</div>
    </main>
  );
}
