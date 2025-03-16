import { services } from "~/utils/services";
import type { Route } from "./+types/service";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { client, urlFor } from "~/sanity/client";
import type { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";

export function meta({ data }: Route.MetaArgs) {
  return [
    {
      title: `${data.service?.title} | LAK Advocates`,
    },
  ];
}
export async function loader({ params }: Route.LoaderArgs) {
  let { slug } = params;

  // let service = services.find(
  //   (item) =>
  //     item.title.toLowerCase().trim().split(" ").join("-") === title.trim()
  // );

  // return { service };
  let service = await client.fetch<SanityDocument>(
    `*[_type == 'legalService' && slug.current == '${slug}']{_id, slug{current}, image, name, details} `
  );
  return { service };
}

export default function Service({ loaderData }: Route.ComponentProps) {
  let { service } = loaderData;
  let navigate = useNavigate();
  console.log({ service });

  let serviceImageUrl = service[0].image
    ? urlFor(service[0].image)?.width(550).auto("format").url()
    : null;
  // return null;
  return (
    <main className="mt-56 px-6 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto service-detail">
      <Button
        className=" bg-brand-purple hover:bg-purple-500 active:scale-[.97] transition ease-in-out duration-300"
        onClick={() => navigate(-1)}
      >
        <span className="flex items-center gap-2">
          <ArrowLeft /> Back to services
        </span>
      </Button>
      <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
        {service[0]?.name}
      </h1>
      <div className="mt-8  lg:max-w-xl xl:max-w-2xl aspect-video mx-auto">
        <img
          src={serviceImageUrl}
          alt=""
          className="w-full h-full rounded-lg object-cover object-center"
        />
      </div>
      <div className="prose mt-8 lg:mt-16 text-center mx-auto">
        {Array.isArray(service[0].details) && (
          <PortableText value={service[0].details} />
        )}
      </div>
    </main>
  );
}
