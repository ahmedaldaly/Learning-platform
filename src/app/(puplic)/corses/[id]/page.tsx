'use client'; // تأكد من إضافة هذا السطر لاستخدام hooks في Next.js

import { BaseUrl } from '@/components/BaseUrl';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // استيراد useParams
import { motion } from "framer-motion";
const Page = () => {
    const { id } = useParams(); // استخدام useParams للحصول على id
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BaseUrl}/corses/${id}`);
                const data = await response.json();
                setCourse(data);
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };
        if (id) {
            fetchData();
        }
    }, [id]);

    if (!course) {
        return <div className="text-white text-center py-10">Loading...</div>;
    }

    const { title, desc, category, videos, image } = course;

    const handleVideoChange = (index) => {
        setCurrentVideoIndex(index);
        setIsVideoPlaying(false);
    };

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    return (
        <motion.div 
        initial={{y:-150}}
        whileInView={{y:0}}
        transition={{duration:0.5}}
        className="bg-gray-900 min-h-screen text-white font-sans p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-500 mb-4">{title}</h1>
                    <p className="text-gray-300 text-lg mb-4">{desc}</p>
                    <p className="text-gray-300">
                        <strong className="text-orange-500">Category:</strong> {category}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-orange-500 mb-6">Videos</h2>
                        <ul className="space-y-4">
                            {videos.map((video, index) => (
                                <li key={video._id}>
                                    <button
                                        onClick={() => handleVideoChange(index)}
                                        className={`w-full text-left text-blue-400 hover:text-blue-300 text-lg p-3 rounded-lg transition-all ${
                                            currentVideoIndex === index ? 'bg-gray-800' : 'bg-gray-700'
                                        }`}
                                    >
                                        {video.titleVedio}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-orange-500 mb-6">
                            {videos[currentVideoIndex].titleVedio}
                        </h3>
                        <div className="relative">
                            {!isVideoPlaying && (
                                <div
                                    className="absolute inset-0 bg-cover bg-center cursor-pointer rounded-lg"
                                 
                                    
                                    onClick={handlePlayVideo}
                                >
                                    <div className="absolute  inset-0 flex items-center justify-center  bg-opacity-50 rounded-lg">
                                        <button className="text-white text-6xl w-[50%] mt-10 h-[200px] bg-black">▶️</button>
                                    </div>
                                </div>
                            )}
                            <video
                                controls
                                className="w-full rounded-lg"
                                style={{ display: isVideoPlaying ? 'block' : 'none' }}
                                key={videos[currentVideoIndex].url}
                            >
                                <source src={videos[currentVideoIndex].url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="mt-6 flex justify-between">
                            {currentVideoIndex > 0 && (
                                <button
                                    onClick={() => handleVideoChange(currentVideoIndex - 1)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all"
                                >
                                    Previous Video
                                </button>
                            )}
                            {currentVideoIndex < videos.length - 1 && (
                                <button
                                    onClick={() => handleVideoChange(currentVideoIndex + 1)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all"
                                >
                                    Next Video
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Page;
