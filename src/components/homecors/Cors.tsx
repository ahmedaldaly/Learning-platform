import React from 'react';
import { BaseUrl } from '../BaseUrl';
import Image from 'next/image';
import Link from 'next/link';
const Cors = async () => {
    const response = await fetch(`${BaseUrl}/corses`).then((data) => data.json());
    const data = response.slice(0, 5);
  

    return (
        <div className='w-full mt-[500px] max-md:mt-[1100px] text-center h-auto p-8'>
            <h1 className='text-4xl font-bold text-[#060642]'>أساليب تعليمية متنوعة</h1>
            <p className='text-xl font-medium text-gray-500 mt-4'>
                محتوى متجدّد ومواكب لمهارات المستقبل.
            </p>

            <div className='w-full flex flex-wrap justify-center gap-8 mt-12'>
                {data.map((item) => (
                    <div
                        key={item._id}
                        className='bg-white shadow-lg rounded-2xl p-6 w-80 transform transition-all hover:scale-105 hover:shadow-xl'
                    >
                        <div className='flex justify-center'>
                            <Image
                                src={item.image.url}
                                width={100}
                                height={100}
                                alt={item.title}
                                className='rounded-lg'
                            />
                        </div>
                        <h2 className='text-2xl font-semibold text-[#060642] mt-4'>{item.title}</h2>
                        <p className='text-lg text-gray-600 mt-2'>{item.category}</p>
                        <p className='text-gray-500 mt-2'>
                            عدد الفيديوهات: {item.videos.length}
                        </p>
                    </div>
                ))}
            </div>
                <Link href='/corses' className='text-blue-500 cursor-pointer text-xl '>عرض الدورات </Link>
        </div>
    );
};

export default Cors;