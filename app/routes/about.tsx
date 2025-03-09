export default function About() {
  let team = [
    {
      id: 1,
      name: "Eunice Lumallas",
      title: "Partner",
      imageSrc: "/LUMALLASPHOTO.jpg",
    },
    {
      id: 2,
      name: "Paulette Achieng",
      title: "Partner",
      imageSrc: "/paulette.png",
    },
  ];
  return (
    <main className="px-6 mt-56 lg:mt-64 md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
        About LAK Advocates
      </h1>
      <p className="text-center text-pretty mt-8 lg:mt-12">
        LAK Advocates is a legal, training, and Advisory services partnership
        duly registered under the Registration of Business Names Act (Chapter
        499, Laws of Kenya) as BN/2016/429228. While its Headquarters is
        Nairobi, LAK Advocates has a presence in Western and Nyanza Province in
        Kenya and in Voi Taita Taveta County it is a presence in all East
        African Countries, in West Africa and in Angola, in Zambia, South
        Africa, in The United States,in France and the United Kingdom.
      </p>
      <img
        src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-full lg:max-w-2xl xl:max-w-4xl mx-auto lg:aspect-video object-cover mt-8 lg:mt-12"
      />
      <div className="bg-[#dddddd] mt-24 lg:mt-36 px-6 md:px-10 py-16 rounded-lg grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className=" font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
            Our story
          </h2>
          <p className="text-center text-pretty mt-8">
            LAK emerged out of the unique merging of the paths of three women
            (3) contemporaries finding each other and coming together in a
            partnership that brings together long and diverse expertise and that
            is bound by three Core Values; Ethics, Empathy and Excellence. The
            three are Lumallas Eunice, specializing in dispute resolution with
            experience in both private and public sectors and Paulette Achieng
            having worked before with Lumallas with expertise in Property,
            infrastructure and Family Law and Eunice Kavere a corporate giant
            having supported the turnaround of key corporations in Kenya and
            expert in Intellectual Property law and ICT. While the initial
            partners were Lumallas and Kavere (initially of Lumallas & Kavere
            LLP) Paulette Achieng was emphatic that luck was all part of it and
            that the A in LAK was always meant to be Achieng, and so it was and
            LAK Advocates was born in June 2016 with Lumal- las Achieng and
            Kavere as partners.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/336407/pexels-photo-336407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="mt-24 lg:mt-36">
        <h2 className=" font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
          Meet our team
        </h2>
        {/* Team members */}
        <ul className="mt-8 grid md:grid-cols-2 gap-6 lg:max-w-xl lg:mx-auto">
          {team.map((item) => (
            <li>
              <img
                src={item.imageSrc}
                alt={`Image of ${item.name}`}
                className="h-72 w-full max-w-lg lg:max-w-none object-cover object-top lg:h-auto aspect-[3/4] lg:object-center rounded-lg"
              />
              <p className="mt-4 font-semibold">{item.name}</p>
              <p className="mt-2 text-gray-700">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-24 lg:mt-36">
        <div className="grid lg:grid-cols-2 gap-8 lg:items-center text-center lg:text-left">
          <div>
            <h2 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl">
              Our mission
            </h2>
            <p className="mt-8">
              The mission of LAK Advocates is to create a memorable client
              experience through collaborative and innovative legal
              representation.
            </p>
          </div>
          <div className="md:max-w-sm lg:max-w-none mx-auto relative after:absolute after:-inset-4 after:w-full after:h-full after:bg-[#B668D6] after:-z-10 after:rounded-lg">
            <img
              src="https://images.pexels.com/photos/6457521/pexels-photo-6457521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-16 text-center lg:text-left mt-16 lg:mt-24">
          <div className="lg:order-1">
            <h2 className=" font-semibold font-heading text-3xl md:text-4xl lg:text-5xl">
              Our vision
            </h2>
            <p className="mt-8">
              To build a responsive, profitable and sustainable legal practice
              with a global presence.
            </p>
          </div>
          <div className="md:max-w-sm lg:max-w-none mx-auto relative after:absolute after:inset-4 after:w-full after:h-full after:bg-[#B668D6] after:-z-10 after:rounded-lg">
            <img
              src="https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
