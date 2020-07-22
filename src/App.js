import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api'
import Promise from './Promise'
class App extends Component {
    state = {
        characters: [],
        // characters: [
        //     {
        //         name: 'Charlie',
        //         job: 'Janitor'
        //     },
        //     {
        //         name: 'Mac',
        //         job: 'Bouncer'
        //     },
        //     {
        //         name: 'Dee',
        //         job: 'Aspiring actress'
        //     },
        //     {
        //         name: 'Dennis',
        //         job: 'Bartender'
        //     },
        // ]
        apiData: []
    }

    removeCharacter = (index) => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        })
    }

    handleSubmit = (character, e) => {
        e.preventDefault();
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({
                    apiData: result
                })
            })
    }

    render() {
        const { characters, apiData } = this.state;
       
        return (
            <div className="container">
                {/* <h1>Hello, React!</h1> */}
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>

                <br />
                <hr />
                <Api apiData={apiData}/>

                <br />
                <hr />
                <Promise />
            </div>
        )
    }
}


export default App;
