import { NavLink } from "react-router";
import type { Route } from "./+types/posts";

export function meta() {
  return [
    {
      title: "Posts | LAK Advocates",
    },
  ];
}

export async function loader() {
  let res = await fetch("https://lakadvocates.com/wp-json/wp/v2/posts");
  let data = await res.json();

  // console.log({ data });

  let posts = await Promise.all(
    data.map(async (item) => {
      let imgRes = await fetch(
        `https://lakadvocates.com/wp-json/wp/v2/media/${item.featured_media}`
      );
      let img = await imgRes.json();

      return {
        ...item,
        imgSrc: img.source_url,
      };
    })
  );
  return { posts };
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  let { posts } = loaderData;
  // console.log({ posts });
  return (
    <main className="mt-56 lg:mt-64 px-6 md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
        Posts
      </h1>
      {/* <div dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></div> */}
      <div className="mt-8 lg:mt-12">
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((item) => (
            <li
              key={item.id}
              className="post-item border border-gray-300 rounded-lg"
            >
              <NavLink
                to={`/posts/${item.slug}`}
                prefetch="intent"
                viewTransition
              >
                <img
                  src={item.imgSrc}
                  alt={`Image of ${item.title.rendered}`}
                  className="aspect-[4/3] object-cover object-center rounded-t-lg hover:scale-105 transition ease-in-out duration-300"
                />
                <div className="p-4">
                  <h2 className="mt-2 font-semibold hover:underline transition ease-in-out duration-300">
                    {item.title.rendered}
                  </h2>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
