import { SelectedPage, type ClassType } from "../Shared/share"
import { motion } from "framer-motion"
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import Classes from "../Navigation/Classes"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex hic quibusdam porro eveniet quidem nostrum ratione, ducimus harum incidunt ad vero magni officia totam unde aspernatur repellat esse. Culpa?",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex hic quibusdam porro eveniet quidem nostrum ratione, ducimus harum incidunt ad vero magni officia totam unde aspernatur repellat esse. Culpa?",
       image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex hic quibusdam porro eveniet quidem nostrum ratione, ducimus harum incidunt ad vero magni officia totam unde aspernatur repellat esse. Culpa?",
       image: image3
    },
    {
        name: "Adventure Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex hic quibusdam porro eveniet quidem nostrum ratione, ducimus harum incidunt ad vero magni officia totam unde aspernatur repellat esse. Culpa?",
       image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex hic quibusdam porro eveniet quidem nostrum ratione, ducimus harum incidunt ad vero magni officia totam unde aspernatur repellat esse. Culpa?",
       image: image5,
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex hic quibusdam porro eveniet quidem nostrum ratione, ducimus harum incidunt ad vero magni officia totam unde aspernatur repellat esse. Culpa?",
        image: image6,
    },
]


function OurClasses({setSelectedPage}:Props) {
  return (
    <section id="ourclasses" className="w-full py-40 mt-20 bg-pink-200">
        <motion.div
        className="flex flex-col gap-16 py-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses) }
          >
        <motion.div
        className="w-5/6 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}  
        transition={{ duration: 1 }}
        variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        }}          
        >
                  
        {/* header */}
        <div className="flex flex-col md:w-5/6">
            <h1 className="text-4xl font-semibold">OUR CLASSES</h1>
            <p className="py-5">Fringilla a sed suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor.
                Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh.
                Rhoncus sit enim mattis odio in eisus nunc.
            </p>       
        </div>      
        </motion.div>
        <div className="mt- h-93 w-full px-3 overflow-x-auto overflow-y-hidden">
            <ul className="w-700 whitespace-nowrap">
            {classes.map((item: ClassType, index) => (   
                <Classes
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                />       
            ))}          
            </ul>        
        </div>      
        </motion.div>
    </section>
  )
}

export default OurClasses
