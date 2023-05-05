// External Imports
import { FaTree } from 'react-icons/fa';

const Divider = (): JSX.Element => {
    return (
        <div className="flex items-center justify-center gap-8 opacity-30 h-32">
            <FaTree className="h-8 w-auto text-default-dark dark:text-default-light" />
            <FaTree className="h-8 w-auto text-default-dark dark:text-default-light" />
            <FaTree className="h-8 w-auto text-default-dark dark:text-default-light" />
        </div>
    );
};

export default Divider;
