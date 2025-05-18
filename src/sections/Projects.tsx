import eRestoran from "@/assets/images/e-restoran.png";
import eCommerec from "@/assets/images/ecommerce.png";
import qBite from "@/assets/images/qbite.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Arniva",
    year: "2024",
    title: "E-Restoran",
    results: [
      {
        title:
          "Integrated order management across Trendyol, Yemeksepeti, Migros, Getir, and Fudy",
      },
      {
        title: "Centralized restaurant, courier, and order tracking management",
      },
      { title: "Enhanced operational efficiency with advanced features" },
    ],
    link: "https://www.e-restoran.com/",
    githubLink: null,
    image: eRestoran,
  },
  {
    company: "freelance",
    year: "2024",
    title: "QBite",
    results: [
      { title: "Built customizable QR-linked digital menus for restaurants" },
      {
        title:
          "Enabled dynamic meal, logo, and theme modifications without coding",
      },
      { title: "Supported bilingual Arabic-English interface" },
    ],
    link: "https://qbite-client-husseinhajghazals-projects.vercel.app/",
    githubLink: "https://github.com/Husseinhajghazal/qbite-dashboard",
    image: qBite,
  },
  {
    company: "freelance",
    year: "2023",
    title: "MERN-Ecommerce",
    results: [
      {
        title:
          "Developed a multi-vendor ecommerce platform with cart, order, and payment features",
      },
      {
        title:
          "Enabled sellers to manage products, events, coupons, and orders",
      },
      { title: "Provided real-time order tracking and management dashboard" },
    ],
    link: "https://ecommerce-33baa.web.app/",
    githubLink: "https://github.com/Husseinhajghazal/mern-ecommerce",
    image: eCommerec,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-16">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 mt-8">
                    <a href={project.link} className="flex-1 md:flex-none">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-950 hover:text-white duration-300">
                        <span>Visit Live Site</span>
                        <ArrowUpRight />
                      </button>
                    </a>
                    {project.githubLink && (
                      <a href={project.githubLink}>
                        <button className="border-gray-950 text-gray-950 border-[3px] h-12 w-12 rounded-xl font-semibold inline-flex items-center justify-center hover:border-white hover:text-white duration-300">
                          <GithubIcon className="size-8" />
                        </button>
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className=" rounded-3xl mt-8 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:max-w-none lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
