import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { AboutInformation } from '../components/AboutInformation/AboutInformation'
import { getAPOD } from '../API'

export function AboutContainer() {
    return (
        <div backgroundImage = {getAPOD()['url']} >
            <Header />
            <AboutInformation />
            <Footer />
        </div>
    )
}