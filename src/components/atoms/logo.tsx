// External Imports
import Image from 'next/image';

const Logo = (): JSX.Element => {
    return (
        <div className="flex items-end cursor-default">
            <Image
                src={'logomark.svg'}
                alt="logo"
                width={40}
                height={50}
                className="mr-4"
            />
            <span
                className={
                    'hidden md:inline text-4xl font-extrabold text-default-dark dark:text-default-light'
                }
            >
                Terrarity
            </span>
        </div>
    );
};

export default Logo;
