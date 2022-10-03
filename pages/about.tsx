import Polaroid from "../components/polaroid"
import Head from "next/head"
import { useState, useEffect } from "react";

export default function About() {

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
    })
    return (
        <>
            <Head>
                <title>What is BSSCC?</title> 
            </Head>
            <main>
                <div className="flex flex-col bg-[#0F172A] py-20 px-24">
                    <div className="flex space-x-16 pb-24">
                        <div className="flex flex-col w-1/2">
                            <div className="py-4 text-5xl text-white">
                                Our Mission
                            </div>
                            <div className="py-4 text-lg text-white">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </div>
                            <div className="text-pink-600 text-xl pl-8 italic">
                                - BSSCC '22 Team
                            </div>
                        </div>
                        <div className="w-1/2 pt-12">
                            <Polaroid imgSrc={"https://images8.alphacoders.com/749/749455.png"} />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-16">
                        <div className="w-full text-center text-5xl text-white">
                            Meet Our Team
                        </div>

                        <div className="flex space-x-16 w-full">
                            <div className="w-1/3">
                                <Polaroid imgSrc={"https://qph.cf2.quoracdn.net/main-qimg-603a70b456b433931e2fbd534710ca95-lq"}
                                name={"Austin Zeng"}
                                />
                            </div>
                            
                            <div className="flex flex-col w-1/2 pl-12">
                                <div className="text-4xl text-pink-400">
                                    President
                                </div>
                                <div className="text-lg text-white">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                    ex ea commodo consequat. 
                                </div>
                            </div>

                            
                        </div>

                        <div className="flex space-x-16 w-full">   
                            <div className="flex flex-col w-1/2 pr-12">
                                <div className="text-4xl text-pink-400">
                                    President
                                </div>
                                <div className="text-lg text-white">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                    ex ea commodo consequat. 
                                </div>
                            </div>
                            <div className="w-1/3">
                                <Polaroid 
                                imgSrc={"https://wallpapercave.com/wp/wp7151694.png"}
                                name={"Derrick Ha"}
                                /> 
                            </div>
                        </div>
                    </div>

                    <div className=""> {/* TODO add 'image carousel'for exec members*/}
                        
                    </div>

                    <div className="flex flex-col py-20">
                        <span className="text-5xl py-8 faq">
                            Frequently Asked Questions
                        </span>

                            {questions.map((item, index) => 
                                <div className="py-2" key={index}>
                                    <div className="accordion flex text-2xl py-2">
                                        <button className="pr-12 text-5xl mb-2">+</button>
                                        <button className="inline-block align-text-bottom">{item.title}</button>
                                    </div>
                                    <div className="panel pl-20 text-gray-300"> 
                                        {item.content}
                                    </div>
                                </div>
                            )}
                        
                        </div>
                </div>
            </main>
        <style jsx>{`
            .faq {
                background: linear-gradient(89.95deg, rgba(226, 232, 240, 0.9) -12.79%, rgba(255, 255, 255, 0) 180.54%), linear-gradient(270deg, rgba(125, 211, 252, 0.9) -12.13%, rgba(255, 255, 255, 0) 178.47%), linear-gradient(270deg, rgba(165, 243, 252, 0.9) 111.93%, rgba(255, 255, 255, 0) 175.65%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                text-fill-color: transparent;
            }
            .accordion {
                background-color: transparent;
                color: white;   
            }
         
            .panel {
                background-color: transparent;
                overflow: hidden;
                max-height: 0;
                transition: max-height 0.2s ease-out;
            }
        `}</style>
        </>
    )
}