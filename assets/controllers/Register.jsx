import React from "react";
import $ from "min-jquery";
import MyMaterial from "./myMaterial";
import {withStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

const styles = theme => ({
    exist: {
        background: 'red',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    noExist: {
        background: 'green',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    top: {
        position: 'absolute',
        top: '40%',
        width: '100%'
    }
});

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            search: '',
            dispo: '',
            fetch: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        const {classes} = this.props;
        var self = this;
        $.ajax({
            type: 'POST',
            url: '/get-pseudo/' + event.target.value,
            success: function (data) {
                (data == 'true' ? self.setState({dispo: classes.exist}) : self.setState({dispo: classes.noExist}));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
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
            success: function (data) {

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
        window.location.href = "modus-create";
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={classes.top}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                            <MyMaterial.TextField value={this.state.value} onChange={this.handleChange}
                                                  variant="filled"
                                                  label="Choisir un Pseudo" fullWidth={true}/>
                        </Grid>
                        <Grid item xs={6}>
                            {/*<Button variant="contained" color="secondary" type="submit" label="Envoyer"/>*/}
                            <MyMaterial.Button type="submit" variant="contained"
                                               color="primary" fullWidth={true}> Envoyer </MyMaterial.Button>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{display: this.state.search ? "block" : "none"}}
                                 className={this.state.dispo}
                                 label="dispo" variant="outlined">{this.state.search}</div>
                        </Grid>
                    </Grid>
                </form>
                {/*<div id="test">{this.state.search}</div>*/
                }
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Register);
