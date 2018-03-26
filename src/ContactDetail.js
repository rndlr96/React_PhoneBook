import React from 'react'

export default class ContactDetail extends React.Component{
  render(){
    const details = (
      <div>
        {this.props.contact.name} {this.props.contact.phone}
      </div>
    );
    const black = (
      <div>
        Not Selected
      </div>
    );
    return(
      <div>
        <h2>Select INFO</h2>
        {this.props.isSelected ? details : black}
      </div>
    );
  }
}

ContactDetail.defaultProps = {
  contact : {
    name:'',
    phone:''
  }
};
