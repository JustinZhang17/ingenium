// External Imports
import { useState } from 'react';
import { HiOutlineCloudUpload } from 'react-icons/hi';
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as tf from '@tensorflow/tfjs';
import { useRouter } from 'next/router';

// Internal imports
import en from '@/locales/en';
import fr from '@/locales/fr';
import Button from '@/components/atoms/button';
import Placeholder from '@/assets/isopod-placeholder.jpg';
import Divider from '@/components/molecules/divider';

const getIsopodType = (values: number[]): string => {
    const max = Math.max(...values);
    const index = values.indexOf(max);

    const prefix = `I'm ${(max * 100).toFixed(2)}% sure, This is a`;
    if (index === 0) return `${prefix} Clown Isopod!`;
    if (index === 1) return `${prefix} Dairy Cow Isopod!`;
    if (index === 2) return `${prefix} Orange Cuban Isopod!`;
    if (index === 3) return `${prefix} Rubber Ducky Isopod!`;
    if (index === 4) return `${prefix} Zebra Isopod!`;
    return "Can't Identify Isopod";
};

const Isopod = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState('');
    const [classification, setClassification] = useState(
        'Please Upload an Image!'
    );

    const identifyIsopod = async (): Promise<void> => {
        if (!image) {
            alert('Please upload an image.');
            return;
        }

        setClassification('Classifying...');

        const imageEle = document.getElementById('uploaded-image');

        // TODO: Should be moved onto the server side, do more research on TFJS how to do this
        const model = await tf.loadLayersModel('/isopod/model.json');

        const loadedImage = tf.browser
            // @ts-ignore
            .fromPixels(imageEle, 3)
            .resizeBilinear([256, 256])
            .toFloat()
            .mul(1.0 / 255.0)
            .expandDims(0);

        const prediction = model.predict(loadedImage);

        // @ts-ignore
        const values = prediction.dataSync();

        setClassification(getIsopodType(values));
    };

    // TODO: Find Type for e
    const uploadToClient = (e: any): void => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                alert('Only PNG and JPG files are supported.');
                return;
            }
            setImage(file);
            const path = URL.createObjectURL(file);
            setCreateObjectURL(path);
            setClassification('Ready to Identify!');
        }
    };
    return (
        <section>
            <motion.h1
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className=" gradient-text py-12 px-0 text-5xl font-extrabold md:px-2 md:text-6xl xl:text-7xl 2xl:text-8xl text-center"
            >
                {t.isopod_title}
            </motion.h1>
            <Divider />
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 2, ease: 'easeOut' },
                }}
                className="flex justify-center gap-4 md:flex-row flex-col"
            >
                <div className="flex flex-col items-center justify-center gap-4 ">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Image
                            id="uploaded-image"
                            src={
                                createObjectURL ? createObjectURL : Placeholder
                            }
                            width={400}
                            height={400}
                            alt="Uploaded Image"
                            className="rounded-lg max-h-96 object-cover"
                        />
                    </motion.div>
                    <div className="text-xl font-extrabold text-default-dark dark:text-default-light">
                        {classification === 'Classifying...' ? (
                            <span className=" animate-ping">
                                {t.isopod_loading}
                            </span>
                        ) : (
                            classification
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 ">
                    <label
                        aria-label="upload file"
                        htmlFor="dropzone-file"
                        className="flex p-12 flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-background-light dark:bg-background-dark dark:hover:bg-text-dark  hover:bg-text-light dark:border-gray-600  "
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <HiOutlineCloudUpload className="w-10 h-10 mb-3 text-default-dark dark:text-default-light" />
                            <p className="mb-2 text-sm text-default-dark dark:text-default-light">
                                <span className="font-semibold">
                                    {t.isopod_upload1}&nbsp;
                                </span>
                                {t.isopod_upload2}
                            </p>
                            <p className="text-xs text-default-dark dark:text-default-light">
                                PNG, JPG (MAX. 800x600px)
                            </p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            onChange={uploadToClient}
                        />
                    </label>
                    <div className="flex justify-center mb-48 md:mb-0">
                        <Button onClick={identifyIsopod}>
                            {t.isopod_submit}
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Isopod;
