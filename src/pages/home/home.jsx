import Header from "../../components/header/header"
import Posts from "../../components/Posts/Posts"
import Sidebar from "../../components/sidebar/sidebar"
import "./home.css"
import React from 'react'

export default function Home(){
    return(
        <>
        <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}