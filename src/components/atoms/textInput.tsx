import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Internal imports
import en from '@/locales/en';
import fr from '@/locales/fr';

type TextInputProps = {
    id: string;
};

const TextInput = ({ id }: TextInputProps) => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : fr;
    const [inputValue, setInputValue] = useState('');

    // TODO: Find the event's datatype
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <textarea
                id="text-area"
                className="peer h-full min-h-[100px] w-11/12 resize-none rounded-[7px] border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-50 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
                placeholder={t.terry_textarea}
                maxLength={500}
            ></textarea>
        </>
    );
};

export default TextInput;
