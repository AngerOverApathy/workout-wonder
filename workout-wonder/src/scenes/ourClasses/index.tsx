import { SelectedPage, ClassType } from "@/shared/types"
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        name: 'Weight Training Classes',
        description: 'Transform your physique with our dynamic weight training classes.',
        image: image1
    },
    {
        name: 'Yoga',
        description: 'Find balance and tranquility in our rejuvenating yoga classes.',
        image: image2
    },
    {
        name: 'Ab Core Classes',
        description: 'Sculpt a strong core in our targeted ab core classes.',
        image: image3
    },
    {
        name: 'HIIT Classes',
        description: 'Experience the ultimate workout in our heart-pumping HIIT classes.',
        image: image4
    },
    {
        name: 'Fitness Classes',
        description: 'Achieve your fitness goals with our comprehensive fitness classes.',
        image: image5
    },
    {
        name: 'Adventure Classes',
        description: 'Embark on thrilling fitness adventures in our outdoor adventure classes.',
        image: image6
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id='ourclasses' className="w-full bg-primary-100 py-4">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">                       
                    Elevate your fitness journey with our dynamic classes! 
                    Whether you're a beginner or a pro, our diverse offerings cater to all levels. 
                    Join our community, sweat it out, and reach your goals with expert guidance. 
                    Get started today! 
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
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