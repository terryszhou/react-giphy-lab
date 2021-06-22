import { Component } from 'react'

export default class Results extends Component {
    render() {
        let gifItems
        if (this.props.gifData === "") {
            gifItems = ""
        } else {
            gifItems = this.props.gifData.map((gif) => {
                return (
                    <div class="gif-box">
                        <img src={gif.images.fixed_height.url} alt={gif.url}/>
                        <p>{gif.url}</p>
                    </div>
                )
            })
        }
        return (
            <div>
                <h1>Results</h1>
                <div class="result-box">
                    {gifItems}
                </div>
            </div>

        )
    }
}

