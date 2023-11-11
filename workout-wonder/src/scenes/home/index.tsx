import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/RedBull.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import SponsorFortune from '@/assets/SponsorFortune.png'


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
                </div>
            </div>
            {/* IMAGE */}
            <div></div>
        </div>
        
    </section>
}

export default Home