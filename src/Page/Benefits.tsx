import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedPage } from "../Shared/share";
import Button from "../Components/Button";
import Sparkles from "../assets/Sparkles.png";
import AbstractWaves from "../assets/AbstractWaves.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Benefits({setSelectedPage}: Props) {
    return (
        <section id="benefits" className="mt-20 w-5/6 mx-auto md:w-full">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits) }
                className="flex flex-col  space-y-4 ">
                {/*header*/}
                <motion.div
                    className="w-full flex flex-col space-y-4 md:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:1, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1 className="text-4xl font-semibold">MORE THAN JUST GYM</h1>
                    <p className="text-sm font-bold pr-8">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
                </motion.div>
                {/* Box */}
                <motion.div className="flex flex-col space-y-4 md:flex-row md:space-x-4 w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}  
                transition={{ duration: 1 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}    
                >
                    {/* box 1 */}
                    <div className="w-full flex flex-col justify-center items-center py-8 px-3 space-y-4 rounded-md border-2 border-gray-300 md:w-1/3">
                        <button className="bg-pink-200 rounded-full p-2 border-2 border-gray-300">
                        <HomeModernIcon className="h-8 w-8 text-gray-700 " />
                        </button>
                        <h1 className="font-semibold">state of the Art facilities</h1>
                        <p>Neque adipiscing amet amet enim. feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.</p>
                        <AnchorLink
                            className="text-sm font-bold text-red-400 underline"
                            onClick={() => setSelectedPage(SelectedPage.Benefits)}
                            >
                            Learn More
                        </AnchorLink>
                    </div>
                    {/* box 2 */}
                    <div className="w-full flex flex-col justify-center items-center py-8 px-3 space-y-4 rounded-md border-2 border-gray-300 md:w-1/3">
                        <button className="bg-pink-200 rounded-full p-2 border-2 border-gray-300">
                        <UserGroupIcon className="h-8 w-8 text-gray-700 " />
                        </button>
                        <h1 className="font-semibold">100's of Deverse Classes</h1>
                        <p>Neque adipiscing amet amet enim. feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.</p>
                        <AnchorLink
                            className="text-sm font-bold text-red-400 underline"
                            onClick={() => setSelectedPage(SelectedPage.Benefits)}
                            >
                            Learn More
                        </AnchorLink>
                    </div>
                    {/* box 3 */}
                    <div className="w-full flex flex-col justify-center items-center py-6 px-3 space-y-4 rounded-md border-2 border-gray-300 md:w-1/3">
                        <button className="bg-pink-200 rounded-full p-2 border-2 border-gray-300">
                        <AcademicCapIcon className="h-8 w-8 text-gray-700 " />
                        </button>
                        <h1 className="font-semibold">Experts and Pro Trainers</h1>
                        <p>Neque adipiscing amet amet enim. feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.</p>
                        <AnchorLink
                            className="text-sm font-bold text-red-400 underline"
                            onClick={() => setSelectedPage(SelectedPage.Benefits)}
                            >
                            Learn More
                        </AnchorLink>
                    </div>
                </motion.div>

                {/* Details */}
                <div className="flex flex-col justify-center space-y-4 mt-16 md:flex-row md:space-x-10 w-full">
                    <div className="w-full md:w-1/4">
                       <img src={BenefitsPageGraphic} alt="benefits-graphic" className=""/> 
                    </div>
                    {/* parag */}
                    <div className="w-full flex flex-col space-y-6 md:w-3/5">
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
                            <img src={AbstractWaves} alt="AbstractWaves"  className="absolute -top-20 -left-10 md:-top-14 md:-left-8"/>
                        </div>
                        <h1 className="text-4xl font-semibold">MILLIONS OF HAPPY MEMBERS GETTIG <b className="text-amber-500">FIT</b>.</h1>
                        <p>Nascetur aenean massa auctor tincidunt.
                            laculis potenti ametegestas ultrices consectetur adipiscing ultricies enim.
                            Plvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec.
                            Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.</p>
                        <p>Fringilla a sed at suspendisse ut enim vilutpat Rhoncus vel est tellus quam porttitor.
                            Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh.
                            Rhoncus sit enim mattis odio in risus nunc.
                        </p>
                    </motion.div>
                        {/* button */}
                        <motion.div className="flex flex-row"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}  
                            transition={{delay:1, duration: 1 }}
                            variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                            }}    
                        >
                            <div className="relarive">
                                <img src={Sparkles} alt="sparkles" className="absolute top-3/4 right-0" />
                            </div>
                            <Button setSelectedPage={setSelectedPage}>Join Now</Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
  )
}

export default Benefits
