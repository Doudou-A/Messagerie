import React from "react";
import $ from "min-jquery";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            search: '',
            fetch: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({search: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/register',
            data: {
                "username": this.state.value
            },
            success: function (data, dataType) {
                alert(data);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Choisir un Pseudo :
                    </label>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Envoyer"/>
                </form>
                <div id="test">{this.state.search}</div>
            </div>
        );
    }
}
