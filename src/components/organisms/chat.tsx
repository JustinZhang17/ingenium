// External Imports
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    Configuration,
    OpenAIApi,
    ChatCompletionRequestMessage,
    ChatCompletionRequestMessageRoleEnum,
} from 'openai';
import { IoVolumeHigh } from 'react-icons/io5';

// Internal Imports
import Divider from '@/components/molecules/divider';
import Button from '@/components/atoms/button';
import TextInput from '@/components/atoms/textInput';

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const defaultPrompt: string =
    'You are a chat bot that helps children from grades 4-7 learn about terrariums and climate change. Do not respond to any inquiries that are not related to terrariums or climate change. Keep responses consise and to the point for a kid in grade 4-7.';

let prompts: string[] = [];
let responses: string[] = [];

const Chat = (): JSX.Element => {
    // useEffect(() => {

    // }, []);

    const constructMessageHistory = (prompt: string) => {
        let messages: ChatCompletionRequestMessage[] = [
            {
                role: ChatCompletionRequestMessageRoleEnum.System,
                content: defaultPrompt,
            },
        ];
        for (let i = 0; i < prompts.length; i++) {
            if (prompts[i] === undefined || responses[i] === undefined)
                continue;
            messages.push({
                role: ChatCompletionRequestMessageRoleEnum.User,
                content: prompts[i],
            });
            messages.push({
                role: ChatCompletionRequestMessageRoleEnum.Assistant,
                content: responses[i],
            });
        }
        messages.push({
            role: ChatCompletionRequestMessageRoleEnum.User,
            content: prompt,
        });
        return messages;
    };

    const sendAndReceivePrompt = async (prompt: string) => {
        const messageHistory = constructMessageHistory(prompt);
        prompts.push(prompt);
        setLoading(true);
        const response = await openai.createChatCompletion({
            model: 'gpt-4',
            messages: messageHistory,
        });
        setLoading(false);
        console.log(response.data.choices[0].message?.content);
        if (response.data.choices[0].message?.content !== undefined) {
            responses.push(response.data.choices[0].message?.content);

            setOutput(response.data.choices[0].message?.content);
            return response.data.choices[0].message?.content;
        }
    };

    const handleTextButtonClick = (): void => {
        const input = document.getElementById('text-area');

        //@ts-ignore
        const question = `${document.getElementById('text-area')?.value}`;

        //@ts-ignore
        if (input && input.length === 0) return;
        sendAndReceivePrompt(question);
        setQuestion(`${question}`);

        if (input) {
            //@ts-ignore
            input.value = '';
        }
    };

    const handleTTSButtonClick = (): void => {
        if ('speechSynthesis' in window) {
            const speechSynthesizer = new SpeechSynthesisUtterance();
            speechSynthesizer.rate = 1.0; // Speech rate (0.1 to 10)
            speechSynthesizer.pitch = 1.0; // Speech pitch (0 to 2)
            speechSynthesizer.text = output;
            window.speechSynthesis.speak(speechSynthesizer);
        }
    };

    const [question, setQuestion] = useState('');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    return (
        <>
            <div className="py-12">
                <motion.h1
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="gradient-text pb-3 px-0 text-5xl font-extrabold md:px-2 md:text-6xl xl:text-7xl 2xl:text-8xl text-center"
                >
                    Terry the Climate Bot
                </motion.h1>
                <motion.h6
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="gradient-text pb-10 text-xl font-extrabold text-center"
                >
                    Terry can answer any questions about terrariums or climate
                    change!
                </motion.h6>

                <div className="flex items-center justify-center gap-6 my-4 flex-col">
                    <div className="w-11/12 md:text-xl text-base font-extrabold text-default-dark dark:text-default-light">
                        {question}
                    </div>
                    {loading ? (
                        <div className="w-11/12 text-center animate-pulse text-xl font-extrabold text-default-dark dark:text-default-light">
                            Terry is thinking...
                        </div>
                    ) : (
                        <motion.div
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="w-11/12 text-center md:text-xl text-base text-default-dark dark:text-default-light"
                        >
                            {output}
                            {'speechSynthesis' in window &&
                            output.length > 0 ? (
                                <motion.span
                                    transition={{
                                        duration: 0.1,
                                        ease: 'easeOut',
                                    }}
                                    className="flex justify-end"
                                >
                                    <IoVolumeHigh
                                        className="text-lg font-bold text-default-dark dark:text-default-light hover:text-secondary-dark hover:dark:text-secondary-light cursor-pointer transition-colors duration-300 ease-in-out"
                                        size={25}
                                        onClick={handleTTSButtonClick}
                                    />
                                </motion.span>
                            ) : (
                                <></>
                            )}
                        </motion.div>
                    )}
                    <TextInput id="bot_input" />
                    <Button onClick={handleTextButtonClick}>
                        Send question
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Chat;
