import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;





// A journalist is an individual that collects/gathers information in form of text, audio or pictures, processes them to a news-worthy form and disseminates it to the public. The act or process mainly done by the journalist is called journalism.