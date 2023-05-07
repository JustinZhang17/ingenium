// External Imports
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// Internal imports
import en from '@/locales/en';
import fr from '@/locales/fr';
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
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    return (
        <motion.section
            className="sm:px-6 md:px-24 xl:px-48 py-24 sm:py-44 grid place-content-center "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
        >
            <h2 className="text-4xl font-bold text-center text-default-dark dark:text-default-light">
                {t.team_title}
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
                    title={t.team_elias_desc}
                    desc={t.team_elias}
                />
                <TeamCard
                    backgroundImg={JustinBackground}
                    personImg={JustinPerson}
                    name="Justin"
                    title={t.team_justin_desc}
                    desc={t.team_justin}
                />
                <TeamCard
                    backgroundImg={SuviBackground}
                    personImg={SuviPerson}
                    name="Suvi"
                    title={t.team_suvi_desc}
                    desc={t.team_suvi}
                />
                <TeamCard
                    backgroundImg={AdamBackground}
                    personImg={AdamPerson}
                    name="Adam"
                    title={t.team_adam_desc}
                    desc={t.team_adam}
                />
                <TeamCard
                    backgroundImg={NicoleBackground}
                    personImg={NicolePerson}
                    name="Nicole"
                    title={t.team_nicole_desc}
                    desc={t.team_nicole}
                />
            </div>
        </motion.section>
    );
};

export default Team;
