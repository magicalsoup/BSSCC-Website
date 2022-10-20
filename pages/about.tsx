import AccordionItem from "../components/About/AccordionItem";
import Polaroid from "../components/Shared/Polaroid";
import Head from "next/head"
import { useEffect } from "react";
import PresidentCard from "../components/About/PresidentCard";
import Navbar from "../components/Shared/Navbar";
import { FAQ_DATA } from "../data/FAQData";
import { EXECUTIVE_DATA } from "../data/ExecutiveData";
import ExecBoard from "../components/About/ExecutiveBoard";

export default function Home() {

    useEffect(() => { 
        let acc = document.getElementsByClassName("accordion");
        for(let i=0; i<acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if(panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            })
        }
    },[]);

    return (
        <>
            <Head>
                <title>Who we are</title> 
            </Head>
            <Navbar/>
            <main>
                <div className="flex flex-col bg-blue-gray-900 p-32">
                    <div className="flex justify-between py-12">
                        <div className="flex flex-col max-w-lg">
                            <h1 className="py-4 text-5xl white-to-pink-gradient font-raleway">
                                Our Mission
                            </h1>
                            <p className="py-4 text-lg text-white font-dmsans">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <h1 className="text-pink-600 text-xl pl-8 italic font-raleway">
                                - BSSCC '22 Team
                            </h1>
                        </div>
                        <div className="pt-12 max-w-lg">
                            <Polaroid imgSrc={"https://images8.alphacoders.com/749/749455.png"} />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-16 py-32">
                        <h1 className="w-full text-center text-5xl white-to-pink-gradient font-raleway">
                            Meet Our Team
                        </h1>

                        <PresidentCard 
                            photoSrc={"https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq"}
                            name={"Austin Zeng"}
                            description={"life is nice."}
                            flexDirection={""}
                        />

                        <PresidentCard 
                            photoSrc={"https://wallpapercave.com/wp/wp7151694.png"}
                            name={"Derrick Ha"}
                            description={"life is very nice."}
                            flexDirection={"flex-row-reverse"}
                        />
                    </div>

                    <div className=""> {/* TODO add 'image carousel'for exec members*/}
                        <ExecBoard ExecData={EXECUTIVE_DATA}/>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-5xl py-8 font-bold white-to-blue-gradient font-raleway">
                            Frequently Asked Questions
                        </h1>
                        {FAQ_DATA.map((item, index) => 
                            <AccordionItem item={item} key={index}/>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}