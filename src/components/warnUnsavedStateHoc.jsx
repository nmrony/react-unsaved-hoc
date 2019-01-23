import React, { Fragment } from 'react';
import { Prompt } from 'react-router-dom';

function warnAboutUnsavedForm(WrappedComponent) {
  return class WarnAboutUnsavedChanges extends React.Component {
    componentDidUpdate() {
      this._promptUnsavedChange(this.props.dirty, this.props.warningMessage);
    }

    componentWillUnmount() {
      window.onbeforeunload = null;
    }

    _promptUnsavedChange(isUnsaved = false, warningMessage) {
      window.onbeforeunload = isUnsaved && (() => warningMessage);
    }

    render() {
      return (
        <Fragment>
          <WrappedComponent {...this.props} />
          <Prompt when={this.props.dirty} message={location => `${this.props.warningMessage}`} />
        </Fragment>
      );
    }
  };
}

export default warnAboutUnsavedForm;
