import React from 'react'
import Header from "../components/Header"
import JobList from '../components/JobList'
import Email from '../components/Email'

const Home = () => {
    return (
        <>
            <Header/>
            <Email/>
            <JobList/>
        </>
    )
}

export default Home