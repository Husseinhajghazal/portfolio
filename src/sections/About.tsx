"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import CsharpIcon from "@/assets/icons/csharp.svg";
import JavaIcon from "@/assets/icons/java.svg";
import PythonIcon from "@/assets/icons/python.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import SvelteIcon from "@/assets/icons/svelte.svg";
import PrismaIcon from "@/assets/icons/prisma.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import DatabaseIcon from "@/assets/icons/database.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "Csharp",
    iconType: CsharpIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Nextjs",
    iconType: NextjsIcon,
  },
  {
    title: "Svelte",
    iconType: SvelteIcon,
  },
  {
    title: "React / React Native",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Prisma",
    iconType: PrismaIcon,
  },
  {
    title: "Jira",
    iconType: JiraIcon,
  },
  {
    title: "SQL / NoSQL",
    iconType: DatabaseIcon,
  },
];

const hobbies = [
  {
    title: "Football",
    emoji: "⚽",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photoghraphy",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Travel",
    emoji: "✈️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const contraintRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and inspires me."
        />
        <div className="mt-20 flex flex-col gap-6 md:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Exlpore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Exlpore the technologies and tools I use to craft expectional digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid md:grid-cols-5 gap-6 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Exlpore my interests and hobbies beyond the digital realm."
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={contraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="cursor-grab inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={contraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
