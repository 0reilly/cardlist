import React from 'react'
import Header from "../components/Header"
import JobList from '../components/JobList'
import Email from '../components/Email'

const Home = () => {
    return (
        <>
            <Header/>

            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <Email/>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <JobList/>
        </>
    )
}

export default Home