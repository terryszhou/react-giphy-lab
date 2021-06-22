import { Component } from 'react'
import './Home.css'
import SearchContainer from './SearchContainer'

export default class Home extends Component {    constructor(props) {
    super(props)
    this.state = {
        gifData: this.props.gifData
    }
}

    render() {
        return (
            <main>
                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Giphy Search</h1>
                        <p className="lead text-muted">The true source of all things giphy...</p>
                    </div>
                </section>
                <SearchContainer gifData={this.state.gifData} />
            </main>
        )
    }
}