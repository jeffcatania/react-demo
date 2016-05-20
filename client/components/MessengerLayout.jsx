import React from 'react';

export default class MessengerLayout extends React.Component {

  render() {
    return (
      <div>
        <div className="header">{this.props.header}</div>
        <section>
          <div className="leftPane">{this.props.leftPane}</div>
          <div className="content">{this.props.children}</div>
        </section>
      </div>
    );
  }
}

