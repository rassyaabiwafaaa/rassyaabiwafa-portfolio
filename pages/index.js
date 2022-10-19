import Head from "next/head";

import { BsFillMoonStarsFill, BsFillSunFill, BsTelegram } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillBehanceCircle, AiFillMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Image from "next/image";
import ee from "../public/ee.png";
import vv from "../public/vv.png";
import dd from "../public/dd.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import code1 from "../public/code1.png";
import code2 from "../public/code2.png";
import code3 from "../public/code3.png";
import code4 from "../public/code4.png";
import code5 from "../public/code5.png";
import code6 from "../public/code6.png";
import cupcake from "../public/cupcake-01.png";

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
                <a href="https://drive.google.com/drive/folders/1jvL-CJLONq8lTllcFlB8Bcol1vFNILjG" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={cupcake} layout="fill" objectFit="cover" className="fixed" priority />
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

        <section id="services">
          <div className="text-center pt-40">
            <h3 className="text-3xl py-1 dark:text-teal-600">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a front end developer, i have done work for <span className="text-teal-500">agencies</span> to create digital products for both business and consumer use.
            </p>
          </div>

          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image key={1} src={dd} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant design suited for your needs following your desire</p>
              <h4 className="py-4 text-teal-600 ">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image key={1} src={vv} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant design suited for your needs following core design theory</p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={ee} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">Creating elegant design suited for your needs following core design theory</p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div className="text-center pt-40 ">
            <h3 className="text-3xl py-1 dark:text-teal-600">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">The designs I have been created</p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://www.behance.net/gallery/132936271/Food-Delivery-Application-User-Interface-Design" target="_blank" rel="noopener noreferrer">
                <Image src={web1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://www.behance.net/gallery/131336141/Bogor-Berwisata" target="_blank" rel="noopener noreferrer">
                <Image src={web2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <Image src={web3} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://www.behance.net/gallery/132441735/Narama-Mandiri-Website-Design" target="_blank" rel="noopener noreferrer">
                <Image src={web4} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
          </div>
          <p className="text-center dark:text-white">
            Want to see more designs?{" "}
            <span className="text-teal-600">
              <a href="https://www.behance.net/rassyaabiwafa" target="_blank" rel="noopener noreferrer">
                klik here
              </a>
            </span>
          </p>
        </section>

        <section>
          <div className="text-center pt-40 ">
            <h3 className="text-3xl py-1 dark:text-teal-600">Portfolio</h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">The projects I have been created</p>
          </div>
          <div className="flex flex-col gap-10 pt-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://movie-matsuri.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={code1} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://modernbankapp-rassyaabiwafa.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={code2} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://propertycompany.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={code3} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://touravel-rassyaabiwafa.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={code4} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://gerichtrestaurant-rassyaabiwafa.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={code5} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
            <div className="basis-1/3 flex-1 hover:shadow-xl transition-shadow ease-in-out">
              <a href="https://weather-app-rassyaabiwafa.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={code6} className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive" />
              </a>
            </div>
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
      </main>
    </div>
  );
}
