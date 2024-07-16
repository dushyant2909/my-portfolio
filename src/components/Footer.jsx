import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base '>
            <div className="z-0 h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 
      md:p-12 sm:p-8 py-8 flex items-center justify-between lg:flex-col lg:py-6">
                <span className="">
                    2024
                    © All Rights Reserved.
                </span>
                <div className="flex items-center lg:py-2">
                    Build with
                    <span className="text-primary text-2xl px-1 dark:text-primaryDark">♡</span>
                    by Dushyant Bhutiyani
                </div>

            </div>
        </footer>
    )
}

export default Footer