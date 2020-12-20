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
import DiscussionList from "./DiscussionList";
import NoMatch from "./NoMatch";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div style={{ height: '100%'}}>
                    <Switch>
                        <Redirect exact from="/" to ="/home" />
                        <Route exact path="/home"><Register/></Route>
                        <Route exact path="/discussion-list"><DiscussionList/></Route>
                        <Route path="/*"><NoMatch/></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const root = document.querySelector('#root');
ReactDOM.render(<App/>, root);
