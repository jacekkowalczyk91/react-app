import React from 'react'

import CarsView from './CarsView'

class Cars extends React.Component {

    state = {
        cars: null
    }

    componentDidMount() {
        fetch(
            `${process.env.PUBLIC_URL}/data/MOCK_DATA.json`
        ).then(
            response => response.json()
        ).then(
            cars => this.setState({cars})
        )
    }

    render() {
        const {cars} = this.state

        return (
            <div>
                <h2>Cars</h2>
                <CarsView cars={cars}/>
            </div>
        )
    }
}

export default Cars