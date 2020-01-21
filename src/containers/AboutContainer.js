import React from 'react'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { AboutInformation } from '../components/AboutInformation/AboutInformation'
import { getAPOD, getProjectListAll } from '../API'
import COLORS from '../colors'
import { LoonImage } from '../components/LoonImage/LoonImage'

class AboutContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    // getProjectListAll().then(data => console.log(data));

    render() {
        return (
            <div color={COLORS.WHITE}>
                <Header />
                <LoonImage />
                {/* <img src={this.state.backgroundImage} height="100" width="100"></img> */}
                <AboutInformation backgroundImage = {this.state.backgroundImage} />
                <Footer />
            </div>
        );
    }

    componentDidMount() {
        getAPOD().then(data => {
            console.log(data); 
            this.setState(
                { backgroundImage: data.hdurl }
            );
        });
    }
}



export default AboutContainer;