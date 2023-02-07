import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import GithubIcon from "../components/svgs/github";
import InstagramIcon from "../components/svgs/instagram";
import TiktokIcon from "../components/svgs/tiktok";
import YoutubeIcon from "../components/svgs/youtube";
import TaskIcon from "../components/svgs/task";
import BookIcon from "../components/svgs/book";
import sun from "../public/sunShine.jpg";

const menus = [
  { href: "/", text: "home" },
  { href: "/about", text: "about" },
  { href: "/contect", text: "contact" },
];

const icons = [
  { href: "https://github.com/ZhekaBailaArkan", icons: GithubIcon },
  { href: "https://instagram.com/zh33k4", icons: InstagramIcon },
  { href: "https://tiktok.com/", icons: TiktokIcon },
  { href: "https://youtube.com/", icons: YoutubeIcon },
];

const cardImages = [
  { href: sun, alt: "image", title: "Bookies", desc: "Read digital book app" },
  { href: sun, alt: "image", title: "BWallet", desc: "Business Walet" },
  { href: sun, alt: "image", title: "Gojek", desc: "Home screen Gojek app" },
  { href: sun, alt: "image", title: "Bookies", desc: "Read digital book app" },
  { href: sun, alt: "image", title: "BWallet", desc: "Business Walet" },
  { href: sun, alt: "image", title: "Gojek", desc: "Home screen Gojek app" },
];

const user = [
  {
    href: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Marilyn Siphron",
    profesi: "Remix and React Training",
    desc: "Tellus mauris adipiscing dignissim sodales. Id dui venenatis mollis faucibus.",
  },
  {
    href: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Adison Westervelt",
    profesi: "Senior Proogram Manager at Microsoft",
    desc: "Hendrerit diam a, morbi tristique egestas commodo ullamcorper ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit. Venenatis aliquam tellus viverra nullam. Consequat cras ac donec nunc.",
  },
  {
    href: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Marley Siphron",
    profesi: "Jobs",
    desc: "Habitant ut augue eu accumsan tellus ultrices integer. Gravida elementum egestas tellus condimentum bibendum suspendisse ut. Blandit.",
  },
  {
    href: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Marilyn Siphron",
    profesi: "Remix and React Training",
    desc: "Tellus mauris adipiscing dignissim sodales. Id dui venenatis mollis faucibus.",
  },
  {
    href: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Adison Westervelt",
    profesi: "Senior Proogram Manager at Microsoft",
    desc: "Hendrerit diam a, morbi tristique egestas commodo ullamcorper ut. Aenean ipsum tempus, felis nibh amet mollis id sem sit. Venenatis aliquam tellus viverra nullam. Consequat cras ac donec nunc.",
  },
  {
    href: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    name: "Marley Siphron",
    profesi: "Jobs",
    desc: "Habitant ut augue eu accumsan tellus ultrices integer. Gravida elementum egestas tellus condimentum bibendum suspendisse ut. Blandit.",
  },
];

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <header className="fixed w-full bg-white">
        <div className="py-3 lg:px-[96px] md:py-4 px-4 sm:px-4 mx-auto flex flex-row justify-between items-center xl:max-w-7xl md:px-[47px]">
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="flex py-2 md:px-3 space-x-2 md:space-x-4 items-center"
            >
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                className="w-6 h-6 md:w-10 md:h-10 object-cover rounded-full"
              />
              <span className="font-semiBold leading-[160%]">
                <b>it's me</b>
              </span>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex space-x-3">
                {menus.map((menu, index) => (
                  <li key={index} className="cursor-pointer">
                    <Link
                      href={menu.href}
                      className="px-2 py-3 leading-[160%] text-sm"
                    >
                      {menu.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-6 mr-6">
              {icons.map((icon, index) => (
                <Link key={index} className="cursor-pointer" href={icon.href}>
                  <icon.icons />
                </Link>
              ))}
            </div>

            <button className="py-2 px-6 text-sm leading-[160%] border border-brand rounded-full  hover:bg-brand hover:text-white">
              Download CV
            </button>

            <button className="md:hidden p-2">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="lg:px-[96px] py-[90px] sm:px-4 lg:py-12 px-4 md:px-[47px]">
        {/* Hero */}
        <section className="lg:mt-[58px] sm:mt-[48px] items-center mb-[32px] lg:mb-[56px] lg:flex lg:justify-between lg:mx-auto xl:max-w-7xl">
          <h3 className="flex flex-col font-light text-[33.6px] md:text-[72px] sm:text-[33.6px]">
            <span className="flex items-center">
              Let’s learn <TaskIcon className="md:w-14 md:h-14" />
            </span>
            <span className="flex items-center">
              to code <BookIcon className="md:w-14 md:h-14" />
            </span>
            <span>an application</span>
          </h3>
          <div className="items-center lg:w-[35%] sm:w-[60%]">
            <h1 className="text-left tracking-wider my-[32px]">
              with me <span className="text-brand">zheka baila arkan</span>, a
              software developer who loves to share how to code in many
              programing languages and multi platforms.
            </h1>
            <Link
              href="/"
              className="hidden w-[31%] lg:flex lg:w-[39.5%] text-3.5 text-white px-6 py-2 bg-brand rounded-full"
            >
              Start learn
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-8">
            <button className="md:flex md:justify-center md:items-center text-3.5 text-white px-6 py-3 bg-brand rounded-full">
              Start learn
            </button>
            {icons.map((icon, index) => (
              <a key={index}>
                <icon.icons />
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-wrap mb-3 lg:flex-wrap gap-3 justify-center lg:items-center lg:gap-[36px] sm:mt-[56px]">
          {cardImages.map((images, index) => (
            <div className="p-3 border border-dashed rounded-xl lg:w-[290px] w-[100%] lg:flex lg:flex-col md:w-[331px] h-auto">
              <Image
                key={index}
                src={images.href}
                alt={images.alt}
                className="rounded-xl w-[100%]"
              />
              <div className="flex justify-between items-center p-2">
                <div>
                  <span className="text-[24px] block">{images.title}</span>
                  <span className="text-[14px] block">{images.desc}</span>
                </div>
                <div>
                  <BookIcon />
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="flex justify-center items-center mb-[48px] lg:mb-">
          <Link
            href="/"
            className="border lg:mt-[36px] border-brand hover:bg-brand hover:text-white py-2 px-6 rounded-full text-[14px]"
          >
            Load more
          </Link>
        </div>
      </main>

      <main className="lg:p-[96px] px-4 md:px-[47px]">
        <section>
          <div className="flex lg:flex-row lg:justify-between  lg:items-center flex-col">
            <h1 className="flex flex-col">
              <span className="text-[52px]">It's me</span>
              <span className="text-[52px]">Zheka B A</span>
            </h1>

            <p className="text-5 flex items-center lg:w-[40%] flex-col space-y-7 mt-[32px]">
              <span>
                I like to code and keep it simple, try something new, and learn
                more. I think sharing knowledge is the best practice to improve
                my skills, and I try to do it.
              </span>
              <span>
                I am currently the Chief Technology Officer at dSociety, a
                startup to help students prepare for their exams.
              </span>
            </p>
          </div>
        </section>

        <section className="flex flex-wrap justify-center mt-[96px] mb-[36px] gap-8 ">
          {user.map((user) => (
            <div className="flex space-x-4 border border-dashed p-6 w-[100%] lg:w-[297px] rounded-3xl">
              <img
                src={user.href}
                alt={user.name + "Pictures"}
                className="w-6 h-6 md:w-10 md:h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-4 font-normal">{user.name}</span>
                <span className="text-[100%] lg:text-2 text-brand">
                  {user.profesi}
                </span>
                <p className="text-[100%] lg:text-2 mt-6">{user.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
