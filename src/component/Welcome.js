import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/Home');
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    return (
        <div className='w-[100%] h-screen bg-black flex justify-center items-center md:items-start '>
            <div className='w-[15rem] h-[15rem]  flex flex-col justify-center  md:justify-start  md:mt-[9rem]  gap-6 '>
                <div className='w-[14rem]  ml-auto mr-auto'>

                    <h1 className="flex gap-2 py-4 pl-8 text-5xl font-bold text-white cursor-pointer md:ml-0 flew-row ">
                        KRYPTO
                    </h1>
                </div>


                <div class="flex items-center justify-center h-screen">
                    <div class="rounded-md h-[4rem] w-[4rem] border-4 border-t-4 border-[#908FDB] animate-spin absolute"></div>

                </div>
            </div>
        </div>
    )
}

export default Welcome
