import React, { Component } from 'react'

class Promise extends Component {
    state = {
        users: [],
        forLoopUsers: ['jon', 'JON', 'andrey', 'ANDREY', 'tania', 'TANIA'],
        promiseAllUsers: ['jon', 'andrey', 'tania', 'JON', 'ANDREY', 'TANIA']
    }

    // First promise returns an array after a delay
    getUsers = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(
                () => resolve([{ id: 'jon' }, { id: 'andrey'}, { id: 'tania'} ]),
                600
            )
        })
    }

    // Second promise relies on the result of first promise
    getIdFromUser = (users) => {
        return new Promise((resolve, reject) => {
            return setTimeout(
                () => resolve(users.id),
                500
            )
        })
    }

    // Third promise relies on the result of the second promise
    capitalizeIds = (id) => {
        return new Promise((resolve, reject) => {
            return setTimeout(
                () => resolve(id.toUpperCase()),
                200
            )
        })
    }

    // using a for...of loop to get users....
    runAsyncFunctions = async () => {
        const users = await this.getUsers()

        for (let user of users) {
            const userId = await this.getIdFromUser(user)
            console.log(userId)

            const capitalized = await this.capitalizeIds(userId)
            console.log(capitalized);
        }

        console.log(users);
    }

    // using Promise.all()....
    runPromiseAsyncFunctions = async () => {
        const users = await this.getUsers()

        Promise.all(
            users.map(async (user) => {
                const userId = await this.getIdFromUser(user)
                console.log(userId);

                const capitalizedId = await this.capitalizeIds(userId)
                console.log(capitalizedId);
            })
        )

        console.log(users)
    }

    


    componentDidMount() {
        // this.runAsyncFunctions()
        // this.runPromiseAsyncFunctions()

        // setTimeout(() => {
        //     console.log('hiii');
        //     this.getUsers().then(users => console.log(users))
        // }, 4000)
    }

    render() {
        return (
            <div>
                <h1>Promise.all with Async/Await</h1>

                <h3>Expected result using a for...of loop....</h3>
                <ul>
                    {this.state.forLoopUsers.map(user => (
                        <li>{user}</li>
                    ))}
                </ul>

                <h3>Expected result using Promise.all()....</h3>
                <ul>
                    {this.state.promiseAllUsers.map(user => (
                        <li>{user}</li>
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Promise;