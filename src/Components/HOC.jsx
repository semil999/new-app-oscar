import React from "react";

function higerOrderComponent(WrappedComponent, props) {
    return class extends React.Component {
      render() {
        return <WrappedComponent props={props}/>;
      }
    };
}

export default higerOrderComponent