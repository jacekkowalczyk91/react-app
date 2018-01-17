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
            cars => this.setState({ cars })
        )
    }

    render() {

        return (
            <div>
                <h2>Cars</h2>
                <CarsView/>
            </div>
        )
    }
}

export default Cars