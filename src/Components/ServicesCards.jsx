import React, { useState } from 'react';
import panacea from '/assets/panacea.png';
import ServiceContent from './ServiceContent';
import IT from '/assets/IT.png';
import Web from '/assets/web.png';
import App from '/assets/app.png';
import Ui from '/assets/ui.png';
import Digital from '/assets/digital.png';
import Ecommerce from '/assets/ecommerce.png'


const ServicesCards = () => {
    const [select, setSelect] = useState(0);

    let content;
    switch (select) {
        case 0:
            content = <ServiceContent 
                heading={"Where Your Solutions Take Shape"} 
                content={"We craft IT designs tailored to your needs, helping you visualize and understand your solution."} 
                source={IT} 
            />;
            break;
        case 1:
            content = <ServiceContent 
                heading={"Web Development"} 
                content={"We specialize in creating responsive, high-performance websites that provide a seamless user experience across all devices."} 
                source={panacea} 
            />;
            break;
        case 2:
            content = <ServiceContent 
                heading={"App Development"} 
                content={"We build robust mobile applications that offer intuitive interfaces and smooth functionality for both iOS and Android platforms."} 
                source={panacea} 
            />;
            break;
        case 3:
            content = <ServiceContent 
                heading={"UI/UX Design"} 
                content={"Our design team focuses on crafting beautiful, user-friendly interfaces and experiences that engage your users and promote your brand."} 
                source={panacea} 
            />;
            break;
        case 4:
            content = <ServiceContent 
                heading={"Digital Marketing"} 
                content={"We help you amplify your online presence with tailored strategies, leveraging SEO, social media, and content marketing to drive traffic and conversions."} 
                source={panacea} 
            />;
            break;
        case 5:
            content = <ServiceContent 
                heading={"Ecommerce Solutions"} 
                content={"We offer end-to-end eCommerce solutions, from platform development to integrated payment systems, ensuring smooth and scalable online stores."} 
                source={panacea} 
            />;
            break;
        default:
            content = <ServiceContent 
                heading={"Where Your Solutions Take Shape"} 
                content={"We craft IT designs tailored to your needs, helping you visualize and understand your solution."} 
                source={panacea} 
            />;
    }

    return (
        <div className='h-[70vh] grid grid-cols-1 md:grid-cols-3 p-12 relative z-[9999] cursor-pointer'>
            <div className="selectors text-white col-span-1 relative z-[9999] p-4 flex flex-col gap-6">
                <div className="option relative z-[9999] flex gap-6 items-center cursor-pointer justify-start">
                    <img src={IT} alt="Panacea" className='h-[5vh] relative z-[9999]' onClick={() => setSelect(0)}/>
                    <h3 onClick={() => setSelect(0)} className='text-center text-sm md:text-lg font-medium'>IT</h3>
                </div>
                <div className="option relative z-[9999] flex gap-6 items-center cursor-pointer justify-start">
                    <img src={Web} alt="Panacea" className='h-[5vh] relative z-[9999]' onClick={() => setSelect(1)}/>
                    <h3 onClick={() => setSelect(1)} className='text-center text-sm md:text-lg uppercase'>Web development</h3>
                </div>
                <div className="option relative z-[9999] flex gap-6 items-center cursor-pointer justify-start">
                    <img src={App} alt="Panacea" className='h-[5vh] relative z-[9999]' onClick={() => setSelect(2)}/>
                    <h3 onClick={() => setSelect(2)} className='text-center text-sm md:text-lg uppercase'>App development</h3>
                </div>
                <div className="option relative z-[9999] flex gap-6 items-center cursor-pointer justify-start">
                    <img src={Ui} alt="Panacea" className='h-[5vh] relative z-[9999]' onClick={() => setSelect(3)}/>
                    <h3 onClick={() => setSelect(3)} className='text-center text-sm md:text-lg uppercase'>UI/UX design</h3>
                </div>
                <div className="option relative z-[9999] flex gap-6 items-center cursor-pointer justify-start">
                    <img src={Digital} alt="Panacea" className='h-[5vh] relative z-[9999]' onClick={() => setSelect(4)}/>
                    <h3 onClick={() => setSelect(4)} className='text-center text-sm md:text-lg uppercase'>Digital Marketing</h3>
                </div>
                <div className="option relative z-[9999] flex gap-6 items-center cursor-pointer justify-start">
                    <img src={Ecommerce} alt="Panacea" className='h-[5vh] relative z-[9999]' onClick={() => setSelect(5)}/>
                    <h3 onClick={() => setSelect(5)} className='text-center text-sm md:text-lg uppercase'>Ecommerce Solution</h3>
                </div>
            </div>

            {/* Main content area */}
            <div className="content bg-[#EFF6FF] col-span-2 relative z-[9999] p-6 h-[100%]">
                {content}
            </div>
        </div>
    );
};

export default ServicesCards;
