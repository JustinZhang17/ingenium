import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    type: string;
};

const ChatHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json({ type: 'GPT' });
};

export default ChatHandler;
