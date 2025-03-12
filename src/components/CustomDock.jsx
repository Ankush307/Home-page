import React, { useState } from 'react';

const CustomDock = () => {
    const [openTabs, setOpenTabs] = useState([]);
    const handleOpenTab = (folder) => {
        if (!openTabs.some(tab => tab.folder === folder)) {
            setOpenTabs([...openTabs, { folder, id: Date.now() }]);
        }
    };
    const handleCloseTab = (id) => {
        setOpenTabs(openTabs.filter(tab => tab.id !== id));
    };

    return (
        <div className='mx-auto min-h-screen flex flex-col items-center justify-center py-20 max-md:py-16 px-8 bg-gray-300'>
            <div className='flex gap-4 bg-gray-900 w-full rounded-t-2xl fixed -bottom-5 max-w-[1140px] z-20'>
                <img onClick={() => handleOpenTab('finder')} className='w-full rounded-2xl hover:scale-110 finder transition-all duration-300 h-full max-w-[80px] cursor-pointer -translate-y-8' src="/assets/images/png/finder.png" alt="finder" />
                <img onClick={() => handleOpenTab('safari')} className='w-full rounded-2xl hover:scale-110 safari transition-all duration-300 h-full max-w-[80px] cursor-pointer -translate-y-8' src="/assets/images/png/safari.png" alt="safari" />
            </div>
            {openTabs.map((tab) => (
                <div key={tab.id} className={`fixed ${tab.folder === 'finder' ? 'left-0' : 'right-0'} flex justify-center items-center z-10 px-5`}>
                    <div className="max-w-[500px] overflow-hidden rounded-2xl max-h-[600px] bg-black p-10 relative">
                        <img onClick={() => handleCloseTab(tab.id)} className='absolute top-1 right-1 max-w-[40px] max-h-[40px] cursor-pointer' src="/assets/images/webp/cross-icon.webp" alt="cross icon" />
                        <h2 className="text-center text-white py-4">Your {tab.folder} Tab Content</h2>
                        <p className="text-white text-center"> Here is some content inside the {tab.folder} tab!</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomDock;
