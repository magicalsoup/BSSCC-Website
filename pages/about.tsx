import AccordionItem from "../components/About/AccordionItem";
import Head from "next/head";
import { useEffect } from "react";
import PresidentCard from "../components/About/PresidentCard";
import Navbar from "../components/Shared/Navbar";
import { FAQ_DATA } from "../data/FAQData";
import { EXECUTIVE_DATA } from "../data/ExecutiveData";
import ExecBoard from "../components/About/ExecutiveBoard";
import PolaroidLayer from "../components/Shared/PolaroidLayer";

export default function Home() {
  useEffect(() => {
    let acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Who we are</title>
      </Head>
      <Navbar />
      <main>
        <div className="flex flex-col 2xl:items-center bg-blue-gray-900 p-32">
          <div className="2xl:w-[1280px]">
            <div className="flex py-24">
              <div className="flex flex-col max-w-lg">
                <h1 className="py-4 text-5xl white-to-pink-gradient font-raleway font-bold">
                  Our Mission
                </h1>
                <p className="py-4 text-lg text-white font-dmsans">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
                <h1 className="text-pink-600 text-xl pl-8 italic font-raleway">
                  - BSSCC '22 Team
                </h1>
              </div>
              <PolaroidLayer
                imgSrc="/images/polaroids/about.png"
              />
            </div>

            <div className="flex flex-col gap-y-16 py-12">
              <h1 className="text-center text-5xl white-to-pink-gradient font-raleway font-bold">
                Meet Our Team
              </h1>

              <PresidentCard
                photoSrc="/images/executives/Austin_Zeng.jpg"
                name="Austin Zeng"
                description="life is nice."
                flexDirection=""
              />

              <PresidentCard
                photoSrc="/images/executives/Derrick_Ha.webp"
                name="Derrick Ha"
                description="life is very nice."
                flexDirection="flex-row-reverse"
              />
            </div>
            <ExecBoard ExecData={EXECUTIVE_DATA} />
            <div className="flex flex-col">
              <h1 className="text-5xl py-8 font-bold white-to-blue-gradient font-raleway">
                Frequently Asked Questions
              </h1>
              {FAQ_DATA.map((item, index) => (
                <AccordionItem item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
