import React from 'react'

const Footer = () => {
    return (
        <div className='relative overflow-hidden bg-[url("/footerHQ.png")]  min-h-[50vh] flex justify-start items-center bg-csmidnight'
            style={{
                boxShadow: '0 22px  70px 4px rgba(0, 0, 0, 1)'
            }}
        >
            <div className='px-4 md:px-8 xl:px-24 font-semibold text-csmidnight text-7xl neonText '>
                Let's Work <br /> Together
            </div>

        </div>
    )
}

export default Footer
