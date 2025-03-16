import { client, urlFor } from "~/sanity/client";
import type { Route } from "./+types/partner";
import type { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { Facebook, LinkedIn, Twitter } from "~/components/Icon";
import { data, useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function headers({ loaderHeaders }: Route.HeadersArgs) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control"),
  };
}

export async function loader({ params }: Route.LoaderArgs) {
  let { slug } = params;

  // let res = await fetch(
  //   `https://lakadvocates.com/wp-json/wp/v2/pages?slug=partners`
  // );
  // let partners = await res.json();

  let partner = await client.fetch<SanityDocument>(
    `*[_type == 'partner' && slug.current == '${slug}'] {_id, name, role, image, details}`
  );

  return data(
    { partner },
    {
      headers: {
        "Cache-Control": "max-age=600, public",
      },
    }
  );
}

export default function Partner({ loaderData }: Route.ComponentProps) {
  let { partner } = loaderData;

  let navigate = useNavigate();

  let postImageUrl = partner[0].image
    ? urlFor(partner[0].image)?.width(550).auto("format").url()
    : null;

  return (
    <main className="px-6 mt-44 lg:mt-64 md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto partner-detail">
      <Button
        className="flex items-center gap-2 bg-brand-purple hover:bg-purple-500 active:scale-[.97] transition ease-in-out duration-300"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft /> Back
      </Button>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-12">
        <div className="order-1">
          <h1 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl">
            {partner[0].name}
          </h1>
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find me on LinkedIn"
            >
              <LinkedIn name={partner[0].name} />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on X"
            >
              <Twitter name={partner[0].name} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on Facebook"
            >
              <Facebook name={partner[0].name} />
            </a>
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-800 partner-role">
            {partner[0].role}
          </p>
          <div className="prose mt-8">
            {Array.isArray(partner[0].details) && (
              <PortableText value={partner[0].details} />
            )}
          </div>
        </div>
        <div className="relative after:absolute after:-inset-4 after:w-full after:h-full after:bg-[#B668D6] after:-z-10 after:rounded-lg max-h-fit partner-img">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt=""
              className="w-full h-64 md:h-96 object-cover object-center rounded-lg"
            />
          )}
        </div>
      </div>
    </main>
  );
}
