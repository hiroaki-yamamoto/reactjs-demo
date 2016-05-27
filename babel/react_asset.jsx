/*global React, ReactDOM, angular*/
(function(React, ReactDOM, angular) {
    "use strict";
    var HelloTextArea = React.createClass({
        render: function() {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-ng-repeat="item in items">
                            <td>{"{{ item.date | date: 'medium' }}"}</td>
                            <td>{"{{ item.text }}"}</td>
                        </tr>
                    </tbody>
                </table>
            );
        }
    });
    var HelloInput = React.createClass({
        render: function() {
            return (<input data-ng-model="tmpItem.text"/>);
        }
    });
    var HelloForm = React.createClass({
        render: function() {
            return (
                <form name={this.props.name} data-ng-submit="notify()">
                    <HelloTextArea/>
                    <HelloInput/>
                    <button type="submit">Send</button>
                </form>
            );
        }
    });
    var Panel = React.createClass({
        render: function() {
            return (
                <div className="test-panel" data-ng-controller="helloController">
                    <HelloForm name="helloWorldForm"/>
                </div>
            );
        }
    });
    ReactDOM.render(
        <Panel/>, document.getElementById("ui-view"));
    angular.bootstrap(document.getElementById("ui-view"), ["hello"]);
}(React, ReactDOM, angular));
