import { Button } from "~/components/ui/button";
import type { Route } from "./+types/post";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export function meta({ data }: Route.MetaArgs) {
  let { post } = data;
  return [
    {
      title: `${post.title.rendered} | LAK Advocates`,
    },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  let { slug } = params;
  let res = await fetch(
    `https://lakadvocates.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  let data = await res.json();

  let imgRes = await fetch(
    `https://lakadvocates.com/wp-json/wp/v2/media/${data[0].featured_media}`
  );
  let img = await imgRes.json();

  console.log({ img });

  let post = { ...data[0], imgSrc: img.source_url };

  return { post };
}

export default function Post({ loaderData }: Route.ComponentProps) {
  let { post } = loaderData;
  console.log({ post });
  let navigate = useNavigate();

  return (
    <main className="mt-56 lg:mt-64 px-6 md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto post-detail">
      <Button
        className="flex items-center gap-2 bg-brand-purple hover:bg-purple-500 active:scale-[.97] transition ease-in-out duration-300"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft /> Back to posts
      </Button>
      <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl  font-semibold text-center font-heading">
        {post.title.rendered}
      </h1>
      <img
        src={post.imgSrc}
        alt=""
        className="mt-8 w-full h-full md:h-80 lg:h-96 object-cover object-center rounded-lg"
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="mt-8 lg:mt-16 text-center text-balance lg:max-w-2xl xl:max-w-4xl mx-auto"
      ></div>
    </main>
  );
}
