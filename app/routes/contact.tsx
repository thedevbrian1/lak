import { Mail, Phone } from "lucide-react";
import { Form } from "react-router";
import FormSpacer from "~/components/FormSpacer";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export default function Contact() {
  return (
    <main className="px-6 mt-56 lg:mt-64 md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center font-heading">
        Contact us
      </h1>
      <div className="mt-8 lg:mt-12 flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-6 mx-auto  lg:max-w-2xl xl:max-w-3xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 flex-1">
          <div className="bg-[#dddddd] p-6 rounded-md md:h-52">
            <div className="w-12 h-12 grid place-items-center rounded-md bg-[#AA4FCF] text-white">
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
          <div className="bg-[#dddddd] p-6 rounded-md md:h-52">
            <div className="w-12 h-12 grid place-items-center rounded-md bg-[#AA4FCF] text-white">
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
        <div className="md:w-80 md:max-w-sm mx-auto lg:w-auto lg:max-w-none flex-1 border border-gray-500 p-6 rounded-lg">
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
      <div className="mt-24 lg:mt-36">
        <h2 className="font-semibold font-heading text-3xl md:text-4xl lg:text-5xl text-center">
          Our location
        </h2>
        <div id="map" className="w-full h-full mt-8 lg:mt-12">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.803198551438!2d36.78855067411533!3d-1.292496435631153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112d1a3f850d%3A0x7c3cd05db59b161a!2sLAK%20Advocates!5e0!3m2!1sen!2ske!4v1741605750632!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
