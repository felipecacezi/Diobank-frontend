import { ReactNode } from 'react';
export const Content = ({children} : {children : ReactNode}) => (
    <div className="flex-7 flex justify-center items-center h-full w-full bg-gray-200">
        {children}
    </div>
)