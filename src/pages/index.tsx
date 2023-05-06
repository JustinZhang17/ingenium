// External Imports
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Internal Imports
import Navbar from '@/components/molecules/navbar';
import Spotlight from '@/components/atoms/spotlight';
import Team from '@/components/organisms/team';
import About from '@/components/organisms/about';
import Details from '@/components/organisms/details';
import Divider from '@/components/molecules/divider';
import Isopod from '@/components/organisms/isopod';
import Hero from '@/components/organisms/hero';
import HowTo from '@/components/organisms/howto';
import Chat from '@/components/organisms/chat';
import Video from '@/components/organisms/video';

export default function Home() {
    const [currentTab, setCurrentTab] = useState('initiative');

    const getTab = (tab: string): JSX.Element => {
        if (tab === 'initiative')
            return (
                <>
                    <Hero />
                    <About />
                    <Divider />
                    {/* src is required for video component*/}
                    <Video />
                    <Divider />
                    <Team />
                    <Divider />
                    <Details />
                </>
            );
        if (tab === 'how-to') return <HowTo />;
        if (tab === 'isopod') return <Isopod />;
        if (tab === 'chatbot') return <Chat />;
        return <div>Unknown Tab</div>;
    };

    return (
        <>
            <Navbar setTab={setCurrentTab} />
            <Spotlight />
            <AnimatePresence>{getTab(currentTab)}</AnimatePresence>
        </>
    );
}
