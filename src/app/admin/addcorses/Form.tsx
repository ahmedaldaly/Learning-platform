"use client";
import { BaseUrl } from "@/components/BaseUrl";
import axios from "axios";
import cookie from 'js-cookie';
import React, { useEffect, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
  const [getCategory, setGetCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/category`);
        setGetCategory(response.data);
      } catch (err) {
        console.error("Error fetching categories", err);
        toast.error("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);

    const token = cookie.get('token');
    if (!token) {
      toast.error("No token found. Please log in.");
      setIsLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("category", data.category);
    formData.append("title", data.title);
    formData.append("desc", data.desc);
    formData.append("videoTitles", data.videoTitles);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]); // تأكد من أن الحقل اسمه "image"
    }

    if (data.video && data.video.length > 0) {
      Array.from(data.video).forEach((file) => {
        formData.append("videos", file); // تأكد من أن الحقل اسمه "videos" (بدون [])
      });
    }

    try {
      const response = await axios.post(`${BaseUrl}/corses/upload-course`, formData, {
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Course uploaded successfully!");
      console.log(response.data);
    } catch (err) {
      console.error("Error uploading course", err);
      if (err.response) {
        toast.error(`Error: ${err.response.data.message || "Failed to upload course"}`);
      } else if (err.request) {
        toast.error("No response from the server. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            id="title"
            {...register("title", { required: "Title is required" })}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description:</label>
          <input
            id="desc"
            {...register("desc", { required: "Description is required" })}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.desc && <p className="text-red-500 text-sm">{errors.desc.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="videotitle" className="block text-sm font-medium text-gray-700">Video Titles:</label>
          <input
            id="videotitle"
            {...register("videoTitles", { required: "Video Titles are required" })}
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.videoTitles && <p className="text-red-500 text-sm">{errors.videoTitles.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image:</label>
          <input
            id="image"
            {...register("image", { required: "Image is required" })}
            type="file"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="video" className="block text-sm font-medium text-gray-700">Video:</label>
          <input
            id="video"
            {...register("video", { required: "Video is required" })}
            type="file"
            multiple
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.video && <p className="text-red-500 text-sm">{errors.video.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
          <select
            id="category"
            {...register("category", { required: "Category is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a category</option>
            {getCategory.map((item) => (
              <option key={item._id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isLoading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;