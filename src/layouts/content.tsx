import { ReactNode } from 'react';
export const Content = ({children} : {children : ReactNode}) => (
    <div className="flex-7 flex justify-start items-start h-full w-full bg-gray-200">
        <div className='p-10 w-full'>
            {children}
        </div>
    </div>
)