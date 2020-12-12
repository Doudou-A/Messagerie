import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Register from "./Register";
import NameDispo from "./NameDispo";
import NoMatch from "./NoMatch";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    height: {
        height: '100%'
    }
});

class App extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Router>
                <div style={{ height: '100%'}}>
                    <Switch>
                        <Redirect exact from="/" to ="/home" />
                        <Route exact path="/home"><Register/></Route>
                        <Route exact path="/modus-create"><NameDispo/></Route>
                        <Route path="/*"><NoMatch/></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const root = document.querySelector('#root');
ReactDOM.render(<App/>, root);
