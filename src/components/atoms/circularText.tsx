type CircularTextProps = {
    children: React.ReactNode;
    size?: number;
};

const CircularText = ({ children, size }: CircularTextProps): JSX.Element => {
    return (
        <svg
            viewBox="0 0 100 100"
            width={size ?? 100}
            height={size ?? 100}
            className="animate-spin-slow motion-reduce:animate-none fill-default-dark dark:fill-default-light"
        >
            <defs>
                <path
                    id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
            </defs>
            <text fontSize="17">
                <textPath xlinkHref="#circle">{children}</textPath>
            </text>
        </svg>
    );
};

export default CircularText;
