import { Html, Head, Main, NextScript } from 'next/document';
import Spotlight from '@/components/atoms/spotlight';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <title>Ingenium Innovation Challenge</title>
            <meta name="title" content="Ingenium Innovation Challenge" />
            <meta
                name="description"
                content="A terrarium web app designed to educate youth aged 9-12 on the topic of climate change."
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Ingenium Innovation Challenge" />
            <meta
                property="og:description"
                content="A terrarium web app designed to educate youth aged 9-12 on the topic of climate change."
            />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.svg" />

            <body className="bg-background-light dark:bg-background-dark">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
