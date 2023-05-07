// External Imports
import { HiOutlineZoomIn, HiOutlineZoomOut } from 'react-icons/hi';
import { TbZoomReset } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';

// Internal imports
import en from '@/locales/en';
import fr from '@/locales/fr';
import {
    TutorialCardCover,
    TutorialCardDetail,
    TutorialCardInfo,
    TutorialCardText,
    TutorialCardImage,
    TutorialCardDetailReverse,
} from '@/components/molecules/tutorialCard';
import Button from '@/components/atoms/button';

import Cover from '@/assets/heros/terrarium-hero-light.jpg';
import JarSelection from '@/assets/howto/Jars.jpg';
import Charcoal from '@/assets/howto/Coals.jpg';
import Soil from '@/assets/howto/Soil.jpg';
import Moss from '@/assets/howto/Moss.jpg';
import Isopod from '@/assets/howto/Isopod.jpg';
import Drainage from '@/assets/howto/Drainage.jpg';
import Personal from '@/assets/howto/Personal.jpg';
import Lid from '@/assets/howto/Final.jpg';
import Sun from '@/assets/howto/Sun.jpg';

// HACK: Can be abstracted in a better manner
const zoomStyle = `text-4xl cursor-pointer 
    text-default-dark dark:text-default-light 
    hover:text-secondary-dark hover:dark:text-secondary-light 
    transition-colors duration-300 ease-in-out`;

const scrollerStyle = `gap-12 p-5 justify-center
    motion-safe:place-items-center
    motion-safe:md:place-items-start
    motion-safe:md:sticky 
    motion-safe:md:top-1/2 
    motion-safe:md:-translate-y-1/2 
    motion-safe:md:grid-flow-col 
    motion-safe:grid
    motion-safe:auto-cols-min 
    motion-safe:overflow-x-auto
    motion-safe:md:justify-start 
    motion-reduce:flex 
    motion-reduce:flex-wrap
    `;

const HowTo = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [zoom, setZoom] = useState(100);

    document.body.onscroll = (): void => {
        const scroll = document.getElementById('tutorial-scroller');
        if (scroll && window.innerWidth > 768) {
            scroll.scrollLeft = window.scrollY;
            // console.log(scroll.scrollWidth);
        }
    };

    const zoomIn = (): void => {
        const scroll = document.getElementById('tutorial-scroller');
        if (scroll && zoom < 130) {
            // @ts-ignore
            scroll.style.zoom = zoom + 10 + '%';
            setZoom(zoom + 10);
        }
    };

    const zoomOut = (): void => {
        const scroll = document.getElementById('tutorial-scroller');
        if (scroll && zoom > 70) {
            // @ts-ignore
            scroll.style.zoom = zoom - 10 + '%';
            setZoom(zoom - 10);
        }
    };

    const zoomReset = (): void => {
        const scroll = document.getElementById('tutorial-scroller');
        if (scroll) {
            // @ts-ignore
            scroll.style.zoom = '100%';
            setZoom(100);
        }
    };

    return (
        <div className="motion-safe:md:h-[6000px] motion-reduce:pt-24 motion-reduce:mb-36 py-24 md:py-0">
            <motion.h1
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className=" gradient-text py-12 px-0 text-5xl font-extrabold md:px-2 md:text-6xl xl:text-7xl 2xl:text-8xl text-center"
            >
                Create A Closed Terrarium
            </motion.h1>
            <div id="tutorial-scroller" className={scrollerStyle}>
                <TutorialCardCover
                    img={Cover}
                    title="How To DIY"
                    subtitle="Create an ecosystem in the palm of your hand"
                    flair="The Terrarium Initiative"
                />

                <TutorialCardDetail
                    title="Step 1: Jars"
                    desc="When selecting a container for your terrarium, it's important to choose a glass jar that has a wide opening for easy access. Ensure that the jar is free of any labels or stickers, and give it a thorough cleaning before use to create a clean and healthy environment for your plants to grow."
                    img={JarSelection}
                />
                <TutorialCardInfo
                    title="Step 2: Drainage"
                    desc="Add a one inch layer of small rocks or pebbles at the bottom to create a drainage layer, which allows excess water to drain away from the roots of the plants, preventing them from rotting or becoming waterlogged. The rocks or small stones should be free of any debris to avoid unwanted organic matter that may contaminate the terrarium."
                />
                <TutorialCardImage
                    desc="Did You Know: Our Earth has a drainage layer too, it helps to keep our water clean, and keeps all of the beautiful plants on Earth alive!"
                    img={Drainage}
                />

                <TutorialCardDetailReverse
                    title="Step 3:"
                    desc="Charcoal! Add a layer of activated charcoal: This is an optional layer that helps keep the soil fresh and prevent any unpleasant odors from developing."
                    img={Charcoal}
                />
                <TutorialCardText
                    title="Step 4: Soil/Substrate Mix"
                    subtitle="Time to get your hands dirty!"
                    desc="Add a layer of nutrient-rich soil from the outdoors on top of a layer of window screen mesh. If you don't have window screen mesh, you can use a piece of saran wrap or a plastic bag with many small holes poked into it to create a similar effect."
                />
                <TutorialCardImage
                    desc="Tip: Don’t use Potting soil, your soil needs to be bioactive, meaning dirt that’s filled with little critters"
                    img={Soil}
                />
                <TutorialCardDetail
                    title="Step 5: Plants"
                    desc="Go outdoors to find plants for your terrarium, make sure you choose something that likes humid environments. Get a parent/guardian to help you identify the plants you find."
                    img={Moss}
                />
                <TutorialCardDetailReverse
                    title="Step 6: Pets!"
                    desc="This step is optional, add any springtails or isopods you find on your search to build your terrarium, they can help your terrarium thrive + They look cute!"
                    img={Isopod}
                />

                <TutorialCardText
                    title="Did You Know:"
                    subtitle="Isopods look like little pill bugs, and they are very friendly 😀"
                    desc="Isopods and SpringTails eat decaying matter, such as mold and fungus, they keep our terrariums clean, and our Earth Clean!"
                />
                <TutorialCardImage
                    desc="Step 7: Decorate, make your terrarium unique to you!"
                    img={Personal}
                />
                <TutorialCardInfo
                    title="Step 8: Watering"
                    desc="Giving the terrarium a good watering after planting and then watering as needed while being careful not to overwater is important to keep the plants healthy."
                />
                <TutorialCardImage
                    desc="Step 9: Add a lid to your terrarium, this will help keep the humidity in, and keep your terrarium healthy!"
                    img={Lid}
                />
                <TutorialCardDetail
                    title="Step 10: Sun"
                    desc="Place your terrarium in a spot that gets indirect sunlight, direct sunlight can burn your plants! If our Planet has too many greenhouse gases, the sun will burn us too!"
                    img={Sun}
                />
                <TutorialCardCover
                    img={Cover}
                    title="You did it!"
                    subtitle="Create an ecosystem in the palm of your hand"
                    flair="The Terrarium Initiative"
                />
            </div>
            <div className="md:fixed md:left-1/2 md:-translate-x-1/2 md:bottom-20 flex justify-center md:block">
                <Button href="/files/manual.pdf" target="__blank">
                    Click Here To Download A PDF Version
                </Button>
            </div>
            <div className="fixed top-0 left-0 p-4 gap-6 hidden md:flex bg-default-light dark:bg-default-dark rounded-br-2xl opacity-20 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                    onClick={zoomIn}
                >
                    <HiOutlineZoomIn className={zoomStyle} />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                    onClick={zoomReset}
                >
                    <TbZoomReset className={zoomStyle} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1, ease: 'easeOut' }}
                    onClick={zoomOut}
                >
                    <HiOutlineZoomOut className={zoomStyle} />
                </motion.button>
            </div>
        </div>
    );
};

export default HowTo;
