'use client'
import { BaseUrl } from '@/components/BaseUrl'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import cookie from 'js-cookie'

const FetchData = () => {
    const [coress, setCoress] = useState<Array[]>([])
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        try {
            axios.get(`${BaseUrl}/corses`).then((data) => {
                console.log(data.data)
                setCoress(data.data)
            })
        } catch (err) {
            console.log(err)
        }
    }, [])

    const handleDelete = async (id) => {
        const token = cookie.get('token')
        try {
            await axios.delete(`${BaseUrl}/corses/${id}`, {
                headers: { authorization: `Bearer ${token}` }
            })
            setCoress((prevUsers) => prevUsers.filter((cors) => cors._id !== id));
        } catch (err) { console.log(err) }
    }

    const handleEdit = (id) => {
        const itemToEdit = coress.find((cors) => cors._id === id)
        setEditItem({
            ...itemToEdit,
            imageFile: null,
            videoFiles: [],
            videoTitles: itemToEdit.videos?.map((video) => video.titleVedio) || [],
        })
    }

    const handleSaveEdit = async () => {
        const token = cookie.get('token')
        try {
            const formData = new FormData()
            formData.append('title', editItem.title)
            formData.append('category', editItem.category)
            formData.append('desc', editItem.desc)

            if (editItem.imageFile) {
                formData.append('image', editItem.imageFile)
            }

            if (editItem.videoFiles.length > 0) {
                editItem.videoFiles.forEach((file) => {
                    formData.append('videos', file)
                })
                formData.append('videoTitles', JSON.stringify(editItem.videoTitles)) // إرسال العناوين كـ JSON
            }

            const res = await axios.put(`${BaseUrl}/corses/${editItem._id}`, formData, {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            })

            setCoress((prevCoress) =>
                prevCoress.map((item) => (item._id === editItem._id ? res.data : item))
            )
            setEditItem(null)
        } catch (err) {
            console.error("Error saving edit:", err)
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setEditItem((prevItem) => ({ ...prevItem, [name]: value }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setEditItem((prevItem) => ({ ...prevItem, imageFile: file }))
        }
    }

    const handleVideoChange = (e) => {
        const files = Array.from(e.target.files)
        if (files.length > 0) {
            setEditItem((prevItem) => ({ ...prevItem, videoFiles: files }))
        }
    }

    const handleVideoTitleChange = (e, index) => {
        const { value } = e.target
        setEditItem((prevItem) => {
            const newVideoTitles = [...prevItem.videoTitles]
            newVideoTitles[index] = value
            return { ...prevItem, videoTitles: newVideoTitles }
        })
    }

    return (
        <div>
            {editItem && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">تعديل</h2>
                        <input type="text" name="title" value={editItem.title} onChange={handleInputChange} className="border p-2 mb-4 w-full" />
                        <input type="text" name="category" value={editItem.category} onChange={handleInputChange} className="border p-2 mb-4 w-full" />
                        <input type="text" name="desc" value={editItem.desc} onChange={handleInputChange} className="border p-2 mb-4 w-full" />

                        <div className="mb-4">
                            <label className="block mb-2">اختر صورة جديدة</label>
                            <input type="file" name="image" onChange={handleImageChange} className="border p-2 w-full" />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2">اختر فيديوهات جديدة</label>
                            <input type="file" name="videos" multiple onChange={handleVideoChange} className="border p-2 w-full" />
                        </div>

                        {editItem.videoFiles?.map((file, index) => (
                            <div key={index} className="mb-4">
                                <label className="block mb-2">عنوان الفيديو {index + 1}</label>
                                <input
                                    type="text"
                                    value={editItem.videoTitles[index] || ''}
                                    onChange={(e) => handleVideoTitleChange(e, index)}
                                    className="border p-2 w-full"
                                />
                            </div>
                        ))}

                        <button onClick={handleSaveEdit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                            حفظ التعديلات
                        </button>
                        <button onClick={() => setEditItem(null)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 ml-2">
                            إغلاق
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
                {coress.map((item) => (
                    <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="w-full aspect-[16/9]">
                            <img src={item.image.url} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="text-gray-600 mb-4">{item.category}</p>
                            <div className="flex justify-between">
                                <button onClick={() => handleEdit(item._id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                    تعديل
                                </button>
                                <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                    حذف
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchData
