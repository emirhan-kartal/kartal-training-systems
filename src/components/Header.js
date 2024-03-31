import React, { useContext } from 'react';
import { CurrentPageContext } from './CurrentPageContext';

const Header = () => {
    const {currentPage} = useContext(CurrentPageContext);

    return (
        <header className='flex top-0  w-screen h-16  items-center  justify-between p-4 bg-white shadow-xl '>
            <div className='h-10 w-10 bg-black rounded-full self-start'></div>
            <h3 className='text-2xl font-bold mx-auto'>{currentPage}</h3>
            <div></div>

        </header>
    );
};

export default Header;