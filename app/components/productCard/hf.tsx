// 'use client'
import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router";
export function Header({tc = 0}: {tc?: number}) {
    return(<div className=" max-w-6xl bg-gray-400 items-center p-2 mx-auto flex justify-between">
        {/* <Link to="/"> */}
        <img src="https://static.vecteezy.com/system/resources/thumbnails/014/018/563/small_2x/amazon-logo-on-transparent-background-free-vector.jpg" alt="logo" className="w-36" />
        {/* </Link> */}
                {/* <Link to='/cart'> */}
        <div className="relative">
            <FaShoppingBag size={35}/>
            <div className="absolute text-sm top-5 bg-orange-500 text-white p-0 px-1 rounded-full">{tc}</div>
            </div>
                {/* </Link> */}
    </div>)
}
export function Footer(){}