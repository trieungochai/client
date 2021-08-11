import React from "react";
import { connect } from "react-redux";

import history from "../../history";
import Modal from "../Modal";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log("componentDidMount:", this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);
