import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { AboutInformation } from '../components/AboutInformation/AboutInformation'

export function AboutContainer() {
    return (
        <div>
            <Header />
            <AboutInformation />
            <Footer />
        </div>
    )
}