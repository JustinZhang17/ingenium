// External Imports
import { HiOutlineZoomIn, HiOutlineZoomOut } from 'react-icons/hi';
import { TbZoomReset } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Internal Imports
import {
    TutorialCardCover,
    TutorialCardDetail,
    TutorialCardInfo,
    TutorialCardText,
    TutorialCardImage,
    TutorialCardDetailReverse,
} from '@/components/molecules/tutorialCard';
import Button from '@/components/atoms/button';

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
                <TutorialCardCover />
                <TutorialCardInfo />
                <TutorialCardDetail />
                <TutorialCardDetailReverse />
                <TutorialCardText />
                <TutorialCardImage />
                <TutorialCardInfo />
                <TutorialCardDetail />
                <TutorialCardDetailReverse />
                <TutorialCardText />
                <TutorialCardImage />
            </div>
            <div className="md:fixed md:left-1/2 md:-translate-x-1/2 md:bottom-20 flex justify-center md:block">
                <Button href="/files/manual.pdf" target="__blank">
                    Click Here To Download A PDF Version
                </Button>
            </div>
            <div className="fixed top-0 right-0 p-4 gap-6 hidden md:flex bg-default-light dark:bg-default-dark rounded-bl-2xl opacity-20 hover:opacity-100 transition-opacity duration-300 ease-in-out">
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
