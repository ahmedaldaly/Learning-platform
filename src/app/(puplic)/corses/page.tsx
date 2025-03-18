import React from 'react';
import { BaseUrl } from '@/components/BaseUrl';
import Image from 'next/image';
import Link from 'next/link';
import { delay } from "@/components/lip/delay";
const Page = async () => {
    const response = await fetch(`${BaseUrl}/corses`).then((data) => data.json());
    const data = response;
    await delay(2000);
    return (
        <div className="min-h-screen pt-32 bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold text-center mb-12">الدورات التعليمية</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.map((course) => (
                    <div
                        key={course._id}
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl border border-gray-700"
                    >
                        {/* صورة الدورة */}
                        <div className="relative h-64">
                            <Image
                                src={course.image.url}
                                alt={course.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-2xl"
                            />
                        </div>

                        {/* محتوى الدورة */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-white">{course.title}</h2>
                            <p className="text-sm text-gray-400 mb-4">{course.category}</p>
                            <p className="text-gray-300 mb-4">{course.desc}</p>

                            {/* عدد الفيديوهات */}
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center text-gray-400">
                                    <span className="mr-2">عدد الفيديوهات:</span>
                                    <span className="font-bold text-white">{course.videos.length}</span>
                                </div>
                               
                               <Link href={`/corses/${course._id}`}> <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                                  ابدء الان
                                </button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;