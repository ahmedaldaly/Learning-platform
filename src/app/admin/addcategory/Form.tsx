"use client";
import { BaseUrl } from "@/components/BaseUrl";
import axios from "axios";
import cookie from "js-cookie";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Form = () => {
  const [name, setName] = useState("");
  const onsubmit = async (e) => {
   try{
    e.preventDefault();
    const token = cookie.get("token");
    await axios.post(`${BaseUrl}/category/add`, {
      name: name,
    },{
        headers:{
            authorization: `Berer ${token}`
        }
    });
    toast.success('Category added successfully!');
   }catch(err){
    console.log(err)
    toast.error('faild ..!');
   }
  };
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-sm mx-auto">
    <form onSubmit={onsubmit}>
      <label htmlFor="category" className="block text-gray-700 text-lg mb-2">Category Name:</label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter category name"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none mb-4"
      />
      <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
        Add
      </button>
    </form>
    <ToastContainer />
  </div>
  
  );
};

export default Form;
