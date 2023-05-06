// External Imports
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Configuration,
    OpenAIApi,
    ChatCompletionRequestMessage,
    ChatCompletionRequestMessageRoleEnum,
} from 'openai';

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

    const handleButtonClick = (): void => {
        const input = document.getElementById('text-area');

        //@ts-ignore
        if (input && input.length === 0) return;
        //@ts-ignore
        sendAndReceivePrompt(`${document.getElementById('text-area')?.value}`);

        if (input) {
            //@ts-ignore
            input.value = '';
        }
    };

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
                    {loading ? (
                        <div className="w-11/12 text-center animate-pulse text-xl font-extrabold text-default-dark dark:text-default-light">
                            Terry is thinking...
                        </div>
                    ) : (
                        <div className="w-11/12 text-center md:text-xl text-base font-extrabold text-default-dark dark:text-default-light">
                            {output}
                        </div>
                    )}
                    <TextInput id="bot_input" />
                    <Button onClick={handleButtonClick}>Send question</Button>
                </div>
            </div>
        </>
    );
};

export default Chat;
