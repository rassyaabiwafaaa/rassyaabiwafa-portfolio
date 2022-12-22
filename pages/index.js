import Head from "next/head";

import { BsFillMoonStarsFill, BsFillSunFill, BsTelegram } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillBehanceCircle, AiFillMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";

import { ee, vv, dd, cupcake, square } from "../public/dummy/image/index";

import { listPortfolioProject, listPortfolioDesign } from "../public/dummy/portfolio/index";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rassya Abiwafa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/face-01.png" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition-colors ease-in-out">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white" title={`'anima' has meaning you know, wanna know what is? click me!`}>
              <a href="https://en.wiktionary.org/wiki/anima" target="_blank" rel="noopener noreferrer">
                anima
              </a>
            </h1>
            <ul className="flex items-center">
              <ul>
                {darkMode ? (
                  <BsFillSunFill className="cursor-pointer text-2xl dark:text-white transition-colors ease-in  " onClick={() => setDarkMode(!darkMode)} />
                ) : (
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-white transition-colors ease-in  " onClick={() => setDarkMode(!darkMode)} />
                )}
              </ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1jvL-CJLONq8lTllcFlB8Bcol1vFNILjG" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-52 h-52 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={square} alt="avatar" layout="fill" objectFit="cover" className="fixed " priority />
          </div>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Rassya Abiwafa</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Front End Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Person who have interest about Technology, especially about Front End Web Developing. And can do another things like Video Editing, Design, Motion Graphic. My goals is to improve my skills about programming by learning at
              online course, articles, and do some exercise, and then apply to work with my knowledge.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 md:gap-20 py-3 text-gray-500 flex-wrap">
            <div>
              <a href="https://www.linkedin.com/in/rassyaabiwafa/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-white transition-colors ease-in-out duration-500" title="Visit My LinkedIn Page">
                <AiFillLinkedin />
              </a>
            </div>
            <div>
              <a href="mailto:rassya.abiwafa@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-white transition-colors ease-in-out duration-500" title="Send Me Email">
                <AiFillMail />
              </a>
            </div>
            <div>
              <a href="https://github.com/rassyaabiwafaaa" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-white transition-colors ease-in-out duration-500" title="Visit My Github Page">
                <AiFillGithub />
              </a>
            </div>
            <div>
              <a href="https://www.behance.net/rassyaabiwafa" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-white transition-colors ease-in-out duration-500" title="Visit My Behance Page">
                <AiFillBehanceCircle />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/rassyaabiwafa/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-white transition-colors ease-in-out duration-500" title="Visit My Instagram Page">
                <AiFillInstagram />
              </a>
            </div>
            <div>
              <a href="https://t.me/rassyaabiwafa" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-white transition-colors ease-in-out duration-500" title="Contact Me on Telegram">
                <BsTelegram />
              </a>
            </div>
            <div>
              <a href="https://wa.me/6285782643433" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 dark:hover:text-white transition-colors ease-in-out duration-500" title="Contact Me on Whatsapp">
                <BsWhatsapp />
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services">
          <div className="text-center pt-40">
            <h3 className="text-3xl py-1 dark:text-teal-600">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a front end developer, I have done work for <span className="text-teal-500">agencies</span> to create digital products for both business and consumer use.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="flex-1 text-center shadow-lg p-20 rounded-xl my-10 dark:bg-white">
              <Image key={1} alt="UIdesignImage" src={dd} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant design suited for your needs following your desire</p>
              <h4 className="py-4 text-teal-600 ">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex-1 text-center shadow-lg p-20 rounded-xl my-10 dark:bg-white">
              <Image key={1} alt="CodeImage" src={vv} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Awesome Front End</h3>
              <p className="py-2">Creating awesome and fully functionality Web App suited for your needs following core design</p>
              <h4 className="py-4 text-teal-600">Tech Tools I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">React JS</p>
              <p className="text-gray-800 py-1">And will be more...</p>
            </div>
          </div>
        </section>

        {/* Portfolio Projects */}
        <section>
          <div className="text-center pt-40 ">
            <h3 className="text-3xl py-1 dark:text-teal-600">Portfolio</h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">The projects I have been created</p>
          </div>
          <div className="flex flex-col gap-10 pt-10 lg:flex-row lg:flex-wrap">
            {listPortfolioProject.map((item, index) => (
              <div key={index} className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out bg-white rounded-xl">
                <a href={item.liveDemo} target={"_blank"} rel={"noreferrer"}>
                  <Image src={item.img} alt={`${item.name}`} className="rounded-t-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                </a>
                <div className="justify-between md:pr-8 md:my-10 hidden md:flex ">
                  <div>
                    <a href={`${item.liveDemo}`} target={`_blank`} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white md:px-4 md:py-2 p-1 rounded-md md:ml-8 ">
                      View Demo
                    </a>
                  </div>
                  <div>
                    <a href={`${item.sourceCode}`} target={`_blank`} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white md:px-4 md:py-2 p-1 rounded-md md:ml-8 ">
                      Look Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center dark:text-white py-5">
            Want to see more projects?{" "}
            <span className="text-teal-600">
              <a href="https://www.github.com/rassyaabiwafaaa" target="_blank" rel="noopener noreferrer">
                klik here
              </a>
            </span>
          </p>
        </section>

        {/* Portfolio Designs */}
        <section>
          <div className="text-center pt-40 ">
            <h3 className="text-3xl py-1 dark:text-teal-600">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">The designs I have been created</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {listPortfolioDesign?.map((item, index) => (
              <div key={index} className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out bg-white rounded-xl group">
                <a href="https://movie-matsuri.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <Image src={item.img} alt={`${item.name}`} className=" rounded-t-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
                </a>
                <div className="justify-center pr-8 my-10  flex">
                  <div>
                    <a href={`${item.link}`} target={`_blank`} className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white md:px-4 md:py-2 p-2 rounded-md ml-8">
                      View Design
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center dark:text-white pb-10">
            Want to see more designs?{" "}
            <span className="text-teal-600">
              <a href="https://www.behance.net/rassyaabiwafa" target="_blank" rel="noopener noreferrer">
                klik here
              </a>
            </span>
          </p>
        </section>
      </main>
    </div>
  );
}
