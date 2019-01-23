import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

class WarnAboutUnsaveState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nextLocation: null, openModal: false };
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.preventReload = this.preventReload.bind(this);
  }

  componentDidMount() {
    this.unblock = this.props.history.block(nextLocation => {
      if (this.props.when) {
        this.setState({
          openModal: true,
          nextLocation: nextLocation
        });
      }
      return !this.props.when;
    });
  }

  componentDidUpdate() {
    this.preventReload();
  }

  componentWillUnmount() {
    this.unblock();
    window.onbeforeunload = null;
  }

  onCancel() {
    this.setState({ nextLocation: null, openModal: false });
  }

  onConfirm() {
    this.navigateToNextLocation();
  }

  preventReload() {
    window.onbeforeunload = (this.props.when && (() => true)) || null;
  }

  navigateToNextLocation() {
    this.unblock();
    this.props.history.push(this.state.nextLocation.pathname);
  }

  render() {
    return <div>{this.props.children(this.state.openModal, this.onConfirm, this.onCancel)}</div>;
  }
}

WarnAboutUnsaveState.propTypes = {
  when: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired
};

export default withRouter(WarnAboutUnsaveState);
