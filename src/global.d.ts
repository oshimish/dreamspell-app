import { ReactNode } from 'react';

declare global {
    // https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
    interface WithChildren {
        children?: ReactNode;
    }
}   