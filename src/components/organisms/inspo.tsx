// External imports
import { motion } from 'framer-motion';

// Internal imports
import Polaroid from '@/components/molecules/polaroid';
import TerrariumA from '@/assets/heros/terrarium-1.jpg';
import TerrariumB from '@/assets/heros/terrarium-2.jpg';
import TerrariumC from '@/assets/heros/terrarium-3.jpg';
import TerrariumD from '@/assets/heros/terrarium-4.jpg';
import TerrariumE from '@/assets/heros/terrarium-5.jpg';

const Inspo = () => {
    return (
        <>
            <motion.h1
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className=" gradient-text py-12 px-0 text-5xl font-extrabold md:px-2 md:text-6xl xl:text-7xl 2xl:text-8xl text-center"
            >
                TerraGrams
            </motion.h1>

            <div
                id="tutorial-scroller"
                className="gap-12 p-5 justify-center flex flex-wrap mb-24"
            >
                <Polaroid
                    title="Stephen Gagne"
                    desc="Ottawa, ON"
                    src={TerrariumE}
                />
                <Polaroid
                    title="Darien Backstrom"
                    desc="Quebec City, QC"
                    src={TerrariumB}
                />
                <Polaroid
                    title="Matthieu Gauthier"
                    desc="Laval, QC"
                    src={TerrariumC}
                />
                <Polaroid
                    title="Jenn Nguyen"
                    desc="Ottawa, ON"
                    src={TerrariumD}
                />
                <Polaroid
                    title="Connor Baumgart"
                    desc="Ottawa, ON"
                    src={TerrariumA}
                />
            </div>
        </>
    );
};

export default Inspo;
