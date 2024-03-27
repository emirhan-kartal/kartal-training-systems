import React from 'react';

const Header = () => {
    return (
        <header className='flex top-0  w-screen h-16 justify-between items-center p-4 bg-white shadow-xl '>
            <div className='h-10 w-10 bg-black rounded-full'></div>
            <h3>Title Of the Page</h3>
            <div className='h-10 w-10 bg-black'></div>


        </header>
    );
};

export default Header;