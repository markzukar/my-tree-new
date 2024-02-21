"use client"
import React, { useEffect, useState } from 'react'
import '../../../public/AdminFiles/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script'

const AdminLayout = ({ children }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        if (!isClient) {
            // const script = document.createElement("script");

            // script.src = "/AdminFiles/js/main.js";
            // script.async = true;

            // document.body.appendChild(script);
            setIsClient(true)
        }
    }, [])

    return (
        <div className="flex">
            <div>{children}</div>
        </div>
    );
}

export default AdminLayout;