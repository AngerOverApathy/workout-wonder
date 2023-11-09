import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/RedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return <section
        id='home'
        className='gap-16 bg-gray-20 pb-10 py-10 md:h-full md:pb-0'
    >
        {/* IMAGE AND MAIN HEADER */}
        <div>
            {/* MAIN HEADER */}
            <div>
                {/* HEADER */}
                <div>
                    <div>
                        <img alt="home-page-text" src={HomePageText} />
                    </div>
                    <p>
                    Welcome to Atlas Athletic Training Gym, your ultimate destination for fitness and performance excellence. At Atlas, we're not just a gym; we're a community committed to helping you unlock your potential and achieve your fitness dreams.
                    </p>
                </div>

                {/* ACTIONS */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>

            {/* IMAGE */}
            <div>
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </div>
        
        {/* SPONSORS */}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img alt='redbull-sponsor' src={SponsorRedBull} />
                        <img alt='forbes-sponsor' src={SponsorForbes} />
                        <img alt='fortune-sponsor' src={SponsorFortune} />
                    </div>
                </div>
            </div>

        )
    }
    </section>
}

export default Home