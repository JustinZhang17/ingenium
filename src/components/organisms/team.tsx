// External Imports
import { motion } from 'framer-motion';

// Internal Imports
import TeamCard from '@/components/molecules/teamCard';
import JustinPerson from '@/assets/team/justin-person.png';
import JustinBackground from '@/assets/team/justin-background.png';
import EliasPerson from '@/assets/team/elias-person.png';
import EliasBackground from '@/assets/team/elias-background.png';
import SuviPerson from '@/assets/team/suvi-person.png';
import SuviBackground from '@/assets/team/suvi-background.png';
import AdamPerson from '@/assets/team/adam-person.png';
import AdamBackground from '@/assets/team/adam-background.png';
import NicolePerson from '@/assets/team/nicole-person.png';
import NicoleBackground from '@/assets/team/nicole-background.png';

const Team = (): JSX.Element => {
    return (
        <motion.section
            className="sm:px-6 md:px-24 xl:px-48 py-24 sm:py-44 grid place-content-center "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
        >
            <h2 className="text-4xl font-bold text-center text-default-dark dark:text-default-light">
                Who Are We?
            </h2>
            <div
                className={
                    'relative aspect-auto flex flex-col items-center lg:flex-row lg:justify-center lg:gap-14'
                }
            >
                <TeamCard
                    backgroundImg={EliasBackground}
                    personImg={EliasPerson}
                    name="Elias"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. "
                />
                <TeamCard
                    backgroundImg={JustinBackground}
                    personImg={JustinPerson}
                    name="Justin"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. "
                />
                <TeamCard
                    backgroundImg={SuviBackground}
                    personImg={SuviPerson}
                    name="Suvi"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. "
                />
                <TeamCard
                    backgroundImg={AdamBackground}
                    personImg={AdamPerson}
                    name="Adam"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. "
                />
                <TeamCard
                    backgroundImg={NicoleBackground}
                    personImg={NicolePerson}
                    name="Nicole"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc ultricies aliquam. "
                />
            </div>
        </motion.section>
    );
};

export default Team;
