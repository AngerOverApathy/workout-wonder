import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
 } from "@heroicons/react/24/solid"
import Benefit from "./benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Our facilities are designed to help you reach your goals. We have top of the line equipment and a wide variety of classes to help you stay motivated and break through plateaus."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Hundreds of Diverse Classes",
        description: "We offer a wide variety of classes for all levels of fitness. From beginner to advanced, we have something for everyone. Our instructors are passionate about helping you reach your goals and will work with you every step of the way."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Our trainers are experts in their field and have years of experience helping people reach their fitness goals. They will work with you to create a personalized plan that fits your needs and lifestyle."
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            
            {/* HEADING */}
            <motion.div 
                className="md:my-5 text-sm"
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                At our fitness center, we're more than just a gym; we're a vibrant community dedicated to transforming lives. 
                We believe in empowering individuals to achieve their fitness goals while fostering a supportive and inclusive environment. 
                Join us on a journey towards a healthier, happier you, where every step is celebrated, and success is shared among friends.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                variants={container}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* GRAPHIC */}
                <img 
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <div>
                        <p className="my-5">
                        At Atlas Athletics, we proudly stand as the premier destination for fitness enthusiasts in our community. 
                        What sets us apart and makes us the best choice is our unwavering commitment to your fitness journey. 
                        Our expansive and meticulously maintained facility boasts an impressive array of state-of-the-art equipment, ensuring that you have access to the tools you need to succeed. 
                        Our passionate and highly experienced trainers are here to guide and motivate you, providing personalized support every step of the way.  
                        </p>
                        <p className="mb-5">
                        What truly sets Atlas Athletics apart is our sense of community. 
                        We're more than just a gym; we're a fitness family. Our supportive and welcoming atmosphere makes every member feel like they belong. 
                        We're united by a common goal: achieving our fitness ambitions while enjoying the journey together.
                        Your success is our priority, and we invite you to join us on this exciting fitness journey. Come experience the Atlas Athletics difference today!
                        </p>
                    </div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits;