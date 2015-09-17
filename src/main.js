var React = require('react');

console.log('hello');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello world</p>
      </div>
    );
  }
});

React.render(<Hello />, document.getElementById('container'));
