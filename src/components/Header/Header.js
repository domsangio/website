import React from 'react'
import './Header.css'
import { AboutTab } from './AboutTab.js'

const AboutTitle = "About"
const ResumeTitle = "Resume"
const ProjectsTitle = "Projects"
const RepositoryTitle = "Repo"
const AppsTitle = "Apps"

export const Header = () => 
    (
        <div className='header'>
            <AboutTab title = { AboutTitle} isSelected = { true } onClick = {() => {  }}/>
            <AboutTab title = { ResumeTitle } isSelected = { false } />
            <AboutTab title = { ProjectsTitle } isSelected = { false } />
            <AboutTab title = { RepositoryTitle } isSelected = { false } />
            <AboutTab title = { AppsTitle } isSelected = { false } />
        </div>
    )
    