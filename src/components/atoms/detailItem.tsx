type DetailItemProps = {
    title: string;
    desc: string;
};

const DetailItem = ({ title, desc }: DetailItemProps): JSX.Element => {
    return (
        <div className="border-t border-primary-dark dark:border-primary-light pt-4">
            <dt className="font-medium text-default-dark dark:text-default-light">
                {title}
            </dt>
            <dd className="mt-2 text-sm text-default-dark dark:text-default-light">
                {desc}
            </dd>
        </div>
    );
};

export default DetailItem;
