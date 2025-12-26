import { motion } from "framer-motion"
import { SelectedPage } from "../Shared/share"
// import Button from "../Components/Button";
import ContactUsPage from "../assets/ContactUsPageGraphic.png"
import { useForm, type SubmitHandler } from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

type FormData = {
    name: string,
    email: string,
    message: string,
}

function ContactUs({ setSelectedPage }: Props) {
    
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }


    return (
    <section id="contactus">
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs) } 
        className="py-12"
        >
            {/* container */}
            <div className="flex flex-col space-y-2 w-5/6 md:w-full mx-auto">
                {/* head  */}
                <motion.div
                    className="flex flex-col space-y-4 w-full md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}  
                    transition={{duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}    
                  >
                    <h1 className="text-4xl font-semibold"><b className="text-red-400">JOIN NOW </b> TO GET IN SHAPE</h1>
                    <p>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque.
                        Nulla  adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </p> 
                </motion.div>  
                {/* form and Image*/}
                <motion.div
                    className="flex flex-col space-y-3 mt-5 md:flex-row md:space-x-10 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}  
                    transition={{delay:1, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    }}    
                  >
                        <form
                            // action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                            onSubmit={handleSubmit (onSubmit)}
                            // target="_blank"
                            // method="post"
                            className="flex flex-col space-y-3 w-full md:w-3/5">
                            <input type="text" placeholder="NAME" className="bg-red-400 placeholder:text-gray-50 p-2 rounded-md outline-0 border-0"
                             {...register("name", {required: true, maxLength: 80})}
                            />
                            <p className="mt-1 text-red-400">
                            {errors.name?.type === "required" && "This field is required. "}    
                            {errors.name?.type === "maxLenght" && "Invalid your name. "}    
                                
                          </p>
                            <input type="email" placeholder="EMAIL" className="bg-red-400 placeholder:text-gray-50 p-2 rounded-md outline-0 border-0"
                            {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                            />
                            <p className="mt-1 text-red-400">
                            {errors.email?.type === "required" && "This field is required. "}    
                            {errors.email?.type === "maxLenght" && "Invalid your Email. "}    
                                
                          </p>
                            <textarea typeof="text" placeholder="message"  rows={4} cols={50} className="bg-red-400 placeholder:text-gray-50  p-2 rounded-md outline-0 border-0 "
                            {...register("message", { required: true, maxLength: 2000 })}
                            />
                            <p className="mt-1 text-red-400">
                            {errors.message?.type === "required" && "This field is required. "}    
                            {errors.message?.type === "maxLenght" && "Max Length is 2000 char. "}        
                          </p>
                        <div className="w-full md:w-1/2 mt-5">
                        <button type="submit" className="bg-red-400 py-2 px-4 rounded-md border-0"> Submit</button>
                        </div>  
                    </form>
                      <div className="">
                          <img src={ContactUsPage} alt="contactuspage" />
                     </div>
                </motion.div>
            </div>  
        </motion.div>
    </section>
  )
}

export default ContactUs
