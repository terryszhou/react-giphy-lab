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
                <section>
                    <div>
                        <h1 class="m-3">Giphy Search</h1>
                        <p>The true source of all things giphy...</p>
                    </div>
                </section>
                <SearchContainer gifData={this.state.gifData} />
            </main>
        )
    }
}