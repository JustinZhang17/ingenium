// External Imports
import Image, { StaticImageData } from 'next/image';

type TeamCardProps = {
    backgroundImg: StaticImageData;
    personImg: StaticImageData;
    name: string;
    desc: string;
};

const TeamCard = ({
    backgroundImg,
    personImg,
    name,
    desc,
}: TeamCardProps): JSX.Element => {
    return (
        <div className="w-56 sm:w-56 lg:w-auto">
            <div className="relative grid items-end rounded-b-full overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                    src={backgroundImg}
                    alt=""
                    width={250}
                    height={250}
                    className="absolute rounded-full bottom-0 w-full "
                />
                <Image
                    src={personImg}
                    alt={name + ' Team Member'}
                    width={250}
                    height={250}
                    className="relative translate-y-4 hover:scale-110 hover:-translate-y-0 transition-transform duration-300 ease-in-out"
                />
            </div>
            <div className="text-center mt-4 ">
                <h3 className="text-3xl font-bold text-default-dark dark:text-default-light">
                    {name}
                </h3>
                <p className="text-sm font-medium text-default-dark dark:text-default-light mt-2">
                    {desc}
                </p>
            </div>
        </div>
    );
};

export default TeamCard;
