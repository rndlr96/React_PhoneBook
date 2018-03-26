import React from 'react';

export default class ContactInfo extends React.Component {
  render() {
    return(
      <button type = "button" onClick = {this.props.onClick}>
          <div>
            {this.props.contact.name}<br/>
          </div>
        </button>
    );
  }
}
