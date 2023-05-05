// External Imports
import { useEffect } from 'react';

const Spotlight = (): JSX.Element => {
    useEffect(() => {
        const blob = document.getElementById('blob');
        document.body.onpointermove = (event) => {
            const { clientX, clientY } = event;
            if (blob != null) {
                blob.animate(
                    {
                        left: `${clientX}px`,
                        top: `${clientY}px`,
                    },
                    {
                        duration: 2000,
                        easing: 'ease-in-out',
                        fill: 'forwards',
                    }
                );
            }
        };
    }, []);

    return (
        <>
            <div className={'hidden md:block'}>
                <div
                    className={
                        'fixed -z-30 h-screen w-screen backdrop-blur-[5rem]'
                    }
                />
                <div
                    id="blob"
                    className={
                        'fixed -z-40 -translate-x-1/2 -translate-y-1/2 motion-reduce:hidden'
                    }
                >
                    <svg
                        id="blobAnimation"
                        width="600"
                        height="600"
                        className={
                            'fill-secondary-light dark:fill-secondary-dark '
                        }
                        viewBox="0 0 600 600"
                    >
                        <path d="M416 239.2C456.5 303 499.5 371.5 480.6 428.2 461.7 485 380.8 530 297.8 531.3 214.8 532.5 129.7 490 93.7 423.4 57.8 356.8 71.1 266.2 113.7 201.1 156.2 136 228.1 96.5 283 106.3 337.8 116.2 375.6 175.3 416 239.2Z" />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Spotlight;
