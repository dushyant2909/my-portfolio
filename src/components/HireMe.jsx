import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireMe = () => {

    return (
        <div className="fixed left-4 bottom-4 flex flex-col items-center
         justify-center overflow-hidden">
            <div className="w-40 p-1 h-auto flex items-center justify-center relative">
                <CircularText className={"fill-dark animate-spin-slow"} />
                <Link href={'mailto:dushyantb2003@gmail.com'} className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-dark rounded-full text-light shadow-md border border-dark border-solid w-20 h-20 font-semibold hover:bg-light hover:text-dark transition-all">Hire Me</Link>
            </div>
        </div>
    );
};

export default HireMe;
