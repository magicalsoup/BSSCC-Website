import AccordionItem from "../components/AccordionItem";
import Polaroid from "../components/Polaroid";
import Head from "next/head"
import { useState, useEffect } from "react";
import PresidentCard from "../components/PresidentCard";
import Navbar from "../components/Navbar";

export default function About() {

    // dummy data
    let questions = [

        {
            title: "Why should I join",
            content: "because you are pog",
        },
        {
            title: "When are club meetings",
            content: "wednesdays and fridays",
        },
        {
            title: "Why should I join the club if I'm big brain",
            content: "because your brain is not big enough",
        },
        {
            title: "Why should I join",
            content: "because why not, also i already answered this question",
        },
    ];

    const [accordion, setAccordion] = useState(false);
    // TODO make this more efficient by only updating when according is clicked, not when anything is clicked on the page

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
                <title>What is BSSCC?</title> 
            </Head>
            <Navbar/>
            <main>
                <div className="flex flex-col bg-blue-gray-900 py-20 px-32">
                    <div className="flex space-x-16 pb-24">
                        <div className="flex flex-col w-1/2">
                            <h1 className="py-4 text-5xl text-white">
                                Our Mission
                            </h1>
                            <p className="py-4 text-lg text-white">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <h1 className="text-pink-600 text-xl pl-8 italic">
                                - BSSCC '22 Team
                            </h1>
                        </div>
                        <div className="w-1/2 pt-12">
                            <Polaroid imgSrc={"https://images8.alphacoders.com/749/749455.png"} />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-16">
                        <h1 className="w-full text-center text-5xl text-white">
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
                        
                    </div>

                    <div className="flex flex-col py-20">
                        <h1 className="text-5xl py-8 font-bold white-to-blue-gradient">
                            Frequently Asked Questions
                        </h1>
                        {questions.map((item, index) => 
                            <AccordionItem item={item} index={index}/>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}