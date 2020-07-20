import React, { Component } from 'react'

class Api extends Component {
    render() {
        const { apiData } = this.props
        // console.log(apiData);

        const result = apiData.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return (
            <div>
                <h3>Api Data</h3>
                <ul>{result}</ul>
            </div>
        )
    }
}

export default Api;
