import React from "react";
import ReactDOM from "react-dom";
import NameDispo from "./NameDispo";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            fetch: null,
        };
    }

    handleChange = this.handleChange.bind(this);

    handleChange(event) {
        // this.fetch.abort();
        event.persist();
        this.setState({search: event.target.value});
        // const cities = document.querySelector('#cities');
        // ReactDOM.render(<Cities/>, cities);
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Nom :
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </form>
                <div id="test">{this.state.search}</div>
            </div>
        );
    }
}

const form = document.querySelector('#form');
ReactDOM.render(<Register/>, form);
