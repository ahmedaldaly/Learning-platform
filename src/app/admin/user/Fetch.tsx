"use client";
import { BaseUrl } from "@/components/BaseUrl";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import cookie from 'js-cookie'
import React, { useEffect, useState } from "react";
const Fetch = () => {
  const [user, setUser] = useState<Array[]>([]);
  const [admin, setAdmin] = useState();
  const token = cookie.get('token')
  useEffect(() => {
    try {
      axios.get(`${BaseUrl}/user`,{
        headers:{
          authorization:`Barer ${token}`
        }
      }).then((data) => {
        setUser(data.data);
        console.log(data.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const edit = async (id: string, isAdmin: boolean) => {
    const updatedAdminStatus = !isAdmin; // التبديل بين الـ Admin و User

    // تحديث الحالة في الخادم
    await axios.put(`${BaseUrl}/user/${id}`, {
      Admin: updatedAdminStatus
    },{
      headers:{
        authorization:`Barer ${token}`
      }
    });
    
    setUser((prevUsers) =>
      prevUsers.map((user) =>
        user._id === id ? { ...user, isAdmin: updatedAdminStatus } : user
      )
    );
  };
  const delet = async (id: string) => {
  
    // تحديث الحالة في الخادم
    await axios.delete(`${BaseUrl}/user/${id}`,{
      headers:{
        authorization:`Barer ${token}`
      }
    });
    
    setUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
  };

  return (
    <table className="w-[80%] max-sm:w-full mx-auto">
      <thead className=" max-sm:hidden">
        <tr className=" ">
          <th className="w-[25% p-5 text-start h-14 bg-gray-100 ]">Email :</th>
          <th className="w-[25% p-5 text-start h-14 bg-gray-100 ]">
            {" "}
            UserName :
          </th>
          <th className="w-[25% p-5 text-start h-14 bg-gray-100 ]"> Admin</th>
          <th className="w-[25% p-5 text-start h-14 bg-gray-100 ]"> Action</th>
        </tr>
      </thead>
      {user.map((item) => (
        <tbody key={item._id}>
          <tr className="max-sm:flex max-sm:flex-wrap max-sm:mt-10 max-sm:bg-gray-100">
            <td className="w-[33% max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full p-5 text-start h-16 border-1 border-gray-200">
              {item.email}
            </td>
            <td className="w-[33% max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full p-5 text-start h-16 border-1 border-gray-200">
              {item.username}{" "}
            </td>
            <td className="w-[33% max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-full p-5 text-start h-16 border-1 border-gray-200">
              {item.isAdmin ? "Admin" : "User"}{" "}
            </td>
            <td className="w-[33% max-sm:w-full items-center flex justify-center  h-16 border-1 border-gray-200">
              {" "}
              <span
              onClick={()=>delet(item._id)}
              className=" w-8 h-8 cursor-pointer flex items-center justify-center rounded-full border-1 border-gray-100 hover:text-red-600 duration-300 hover:shadow-md">
                <MdDeleteOutline />
              </span>
              <span
              onClick={() => edit(item._id, item.isAdmin)}
              className=" w-8 h-8 flex cursor-pointer items-center justify-center rounded-full border-1 border-gray-100 hover:shadow-md  hover:text-green-500 duration-300">
                <CiEdit />
              </span>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Fetch;
