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
import Inspo from '@/components/organisms/inspo';
import LanguageToggle from '@/components/atoms/languageToggle';

export default function Home() {
    const [currentTab, setCurrentTab] = useState('initiative');

    const getTab = (tab: string): JSX.Element => {
        if (tab === 'initiative')
            return (
                <>
                    <Hero />
                    <About />
                    <Divider />
                    <Details />
                    <Divider />
                    <Team />
                    <Divider />
                    <Video src="https://www.youtube.com/embed/RbbLm5IGIHE" />
                </>
            );
        if (tab === 'how-to') return <HowTo />;
        if (tab === 'isopod') return <Isopod />;
        if (tab === 'chatbot') return <Chat />;
        if (tab === 'inspo') return <Inspo />;
        return <div>Unknown Tab</div>;
    };

    return (
        <>
            <LanguageToggle />
            <Navbar setTab={setCurrentTab} />
            <Spotlight />
            <AnimatePresence>{getTab(currentTab)}</AnimatePresence>
        </>
    );
}
