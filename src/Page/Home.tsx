// import Link from "../Navigation/Link";
import Button from "../Components/Button";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponserRedBull from "../assets/SponsorRedBull.png"
import SponserFortune from "../assets/SponsorFortune.png"
import SponserForbes from "../assets/SponsorForbes.png"
import { SelectedPage } from "../Shared/share";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { section } from "framer-motion/client";
import EvolveText from "../assets/EvolveText.png"
import { motion } from "framer-motion";


type Props = {
    // isTopOfPage: boolean;
    // selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({setSelectedPage}:Props) {
    return (
        <section id="home" className="w-5/6 mx-auto mt-20 md:w-full">
            <motion.div
                className="flex flex-col items-center gap-16 md:flex-row md:gap-32"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home) }
            >

            {/* LEFT */}
            <div
            className="flex w-full flex-col space-y-6 md:w-1/2">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}  
                transition={{ duration: 1 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}    
                >
                <div className="relative">
                    {/* خلفية EVOLVE فقط للموبايل */}
                    <img
                    src={EvolveText}
                    alt="Evolve"
                    className="hidden absolute -top-12 -left-4 z-10 md:block"
                    />
                    <img
                    src={HomePageText}
                    alt="Home Text"
                    className="relative z-50"
                    />
                </div>
                <p className="text-sm font-bold">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios
                to get the Body Shapes That You dream of. Get your dream Body Now.
                </p>
                </motion.div>
                    <motion.div
                    className="flex items-center gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}  
                    transition={{delay:1.5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                    >
                    <Button setSelectedPage={setSelectedPage}>
                    Join Now
                    </Button>
                    <AnchorLink
                    className="text-sm font-bold text-red-400 underline"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    >
                    Learn More
                    </AnchorLink>
                </motion.div>
            </div>
            {/* RIGHT */}
            <div className="flex w-full justify-center md:w-1/2">
                <img
                src={HomePageGraphic}
                alt="Hero"
                className="w-3/4 md:w-full"
                />
            </div>
    </motion.div>
    {/* SPONSORS */}
    <div className="mt-16 flex flex-wrap items-center justify-center gap-12 bg-pink-300 p-4 md:justify-between">
        <img src={SponserRedBull} />
        <img src={SponserForbes} />
        <img src={SponserFortune} />
  </div>
</section>

    );
}

export default Home
