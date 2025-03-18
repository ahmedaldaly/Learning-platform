"use client";
import { BaseUrl } from "@/components/BaseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import cookie from 'js-cookie'
const FetchData = () => {
  const [category, setCategory] = useState<Array[]>([]);
  useEffect(() => {
    try {
      axios.get(`${BaseUrl}/category`).then((data) => {
        console.log(data.data);
        setCategory(data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const delet = async (id: string) => {
  const token = cookie.get('token')
    // تحديث الحالة في الخادم
    await axios.delete(`${BaseUrl}/category/${id}`,{
      headers:{
        authorization:`Barer ${token}`
      }
    });
    
    setCategory((prevUsers) => prevUsers.filter((user) => user._id !== id));
  };
  return (
    <div>
      {category.map((item) => (
        <div key={item._id} className="flex justify-center gap-3.5 mt-10">
          <p className="text-lg font-semibold text-gray-800 truncate max-w-xs">
            {item.name}
          </p>
          <span 
          onClick={()=> delet(item._id)}
          className="w-8 h-8 cursor-pointer flex items-center justify-center rounded-full border-1 border-gray-100 hover:text-red-600 duration-300 hover:shadow-md">
            <MdDeleteOutline />
          </span>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
