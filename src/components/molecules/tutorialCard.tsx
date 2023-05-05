// External imports
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Internal imports
import Placeholder from '@/assets/isopod-placeholder.jpg';
import CircularText from '@/components/atoms/circularText';

type TutorialCardCoverProps = {
    img?: string;
    title?: string;
    subtitle?: string;
    flair?: string;
};

const TutorialCardCover = ({
    img,
    title,
    subtitle,
    flair,
}: TutorialCardCoverProps): JSX.Element => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, ease: 'easeOut' },
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="aspect-square w-80 sm:w-96 rounded-lg shadow-lg bg-primary-light dark:bg-primary-dark flex flex-col p-5 justify-between relative"
        >
            <Image
                src={img ?? Placeholder}
                alt={img ?? Placeholder.toString()}
                className="h-1/2 object-cover rounded-md"
            />
            <div className="flex items-end">
                <div className="font-semibold text-6xl text-default-dark dark:text-default-light">
                    {title ?? 'How to DIY'}
                </div>
                <div className="font-semibold text-xs text-default-dark dark:text-default-light">
                    {subtitle ??
                        'Do it with materials at home, and save the world!'}
                </div>
            </div>
            <div className="flex justify-between items-end">
                <span className="text-xs text-default-dark dark:text-default-light">
                    Terrarity
                </span>
                <span className="text-xs text-default-dark dark:text-default-light">
                    The Terrarium Initiative
                </span>
                <FiArrowRight className="text-3xl animate-pulse text-default-dark dark:text-default-light" />
            </div>
            <div className="absolute bottom-1/3 right-6">
                <CircularText>
                    {flair ?? 'The Terrarium Initiative'}
                </CircularText>
            </div>
        </motion.div>
    );
};

type TutorialCardInfoProps = {
    title?: string;
    desc?: string;
};

const TutorialCardInfo = ({
    title,
    desc,
}: TutorialCardInfoProps): JSX.Element => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, ease: 'easeOut' },
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="aspect-square w-80 sm:w-96 rounded-lg shadow-lg bg-primary-light dark:bg-primary-dark flex flex-col p-5 justify-between"
        >
            <div className=" font-extralight text-4xl text-default-dark dark:text-default-light">
                {title ?? 'Lorem Ipsum'}
            </div>
            <div className="font-thin text-md tracking-tight text-default-dark dark:text-default-light">
                {desc ??
                    'Praesent a ipsum tempus, finibus urna faucibus, bibendum lacus. Aliquam urna dolor, pharetra interdum erat et, commodo porttitor nibh. Duis sed maximus velit. Fusce pharetra, est non ornare accumsan, dolor dolor cursus dui, eget euismod leo purus ac mauris.'}
            </div>
        </motion.div>
    );
};

type TutorialCardTextProps = {
    title?: string;
    subtitle?: string;
    desc?: string;
};

const TutorialCardText = ({
    title,
    subtitle,
    desc,
}: TutorialCardTextProps): JSX.Element => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, ease: 'easeOut' },
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="aspect-square w-80 sm:w-96 rounded-lg shadow-lg bg-primary-light dark:bg-primary-dark flex flex-col p-5 justify-between"
        >
            <div className=" font-extralight text-4xl text-default-dark dark:text-default-light">
                {title ?? 'Lorem Ipsum'}
            </div>
            <div>
                <div className="text-lg text-default-dark dark:text-default-light mb-4">
                    {subtitle ??
                        'Praesent a ipsum tempus, finibus urna faucibus, bibendum lacus.'}
                </div>
                <div className="font-thin text-sm tracking-tight text-default-dark dark:text-default-light columns-2">
                    {desc ??
                        'Praesent a ipsum: tempus, finibus urna faucibus, bibendumlacus. Aliquam urna dolor, pharetra interdum erat et, commodo porttitor nibh. Duis sed maximus velit. Fusce pharetra, est non ornare accumsan, dolor dolor cursus dui, eget euismod leo purus ac mauris.'}
                </div>
            </div>
        </motion.div>
    );
};

type TutorialCardDetailProps = {
    title?: string;
    desc?: string;
    img?: string;
};

const TutorialCardDetail = ({
    title,
    desc,
    img,
}: TutorialCardDetailProps): JSX.Element => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, ease: 'easeOut' },
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="aspect-square w-80 sm:w-96 rounded-lg shadow-lg bg-primary-light dark:bg-primary-dark flex flex-col justify-between"
        >
            <div className="flex p-5 gap-4">
                <div className="font-extralight text-4xl text-default-dark dark:text-default-light w-1/3">
                    {title ?? 'Lorem'}
                </div>
                <div className="font-thin text-sm tracking-tight text-default-dark dark:text-default-light w-2/3">
                    {desc ??
                        'Praesent a ipsum: tempus, finibus urna faucibus, bibendumlacus. Aliquam urna dolor, pharetra interdum erat et, commodo porttitor nibh. Duis sed maximus velit. Fusce pharetra, est non ornare accumsan, dolor dolor cursus dui, eget euismod leo purus ac mauris.'}
                </div>
            </div>
            <Image
                src={img ?? Placeholder}
                alt={img ?? Placeholder.toString()}
                className="object-cover h-1/2 rounded-b-lg"
            />
        </motion.div>
    );
};

type TutorialCardDetailReverseProps = {
    title?: string;
    desc?: string;
    img?: string;
};

const TutorialCardDetailReverse = ({
    title,
    desc,
    img,
}: TutorialCardDetailReverseProps): JSX.Element => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, ease: 'easeOut' },
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="aspect-square w-80 sm:w-96 rounded-lg shadow-lg bg-primary-light dark:bg-primary-dark flex flex-col-reverse justify-between"
        >
            <div className="flex p-5 gap-4">
                <div className="font-extralight text-4xl text-default-dark dark:text-default-light w-1/3">
                    {title ?? 'Lorem'}
                </div>
                <div className="font-thin text-sm tracking-tight text-default-dark dark:text-default-light w-2/3">
                    {desc ??
                        'Praesent a ipsum: tempus, finibus urna faucibus, bibendumlacus. Aliquam urna dolor, pharetra interdum erat et, commodo porttitor nibh. Duis sed maximus velit. Fusce pharetra, est non ornare accumsan, dolor dolor cursus dui, eget euismod leo purus ac mauris.'}
                </div>
            </div>
            <Image
                src={img ?? Placeholder}
                alt={img ?? Placeholder.toString()}
                className="object-cover h-1/2 rounded-t-lg"
            />
        </motion.div>
    );
};

type TutorialCardImageProps = {
    desc?: string;
    img?: string;
};

const TutorialCardImage = ({
    img,
    desc,
}: TutorialCardImageProps): JSX.Element => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 2, ease: 'easeOut' },
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' },
            }}
            className="aspect-square w-80 sm:w-96 rounded-lg shadow-lg bg-primary-light dark:bg-primary-dark flex flex-col justify-around relative"
        >
            <Image
                src={img ?? Placeholder}
                alt={img ?? Placeholder.toString()}
                className="object-cover max-h-56"
            />
            <span className="text-md text-default-dark dark:text-default-light text-center p-5">
                {desc ??
                    'Praesent a ipsum tempus, finibus urna faucibus, bibendum lacus.'}
            </span>
        </motion.div>
    );
};

export {
    TutorialCardCover,
    TutorialCardInfo,
    TutorialCardText,
    TutorialCardDetail,
    TutorialCardDetailReverse,
    TutorialCardImage,
};
