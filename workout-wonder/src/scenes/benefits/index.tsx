import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import { 
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
 } from "@heroicons/react/24/solid"
import Benefit from "./benefit";

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
            
            {/* Header */}
            <div className="md:my-5 text-sm">
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                At our fitness center, we're more than just a gym; we're a vibrant community dedicated to transforming lives. 
                We believe in empowering individuals to achieve their fitness goals while fostering a supportive and inclusive environment. 
                Join us on a journey towards a healthier, happier you, where every step is celebrated, and success is shared among friends.
                </p>
            </div>

            {/* Benefits */}
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
        </motion.div>
    </section>
  )
}

export default Benefits;