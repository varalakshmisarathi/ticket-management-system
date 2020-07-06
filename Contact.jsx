import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactlist: [],
    };
  }

  componentDidMount() {
    fetch(" http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contactlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        
          {this.state.contactlist.map((contact, index) => (
            <li  key={index}> 
              
            
                  
                  {contact.name.first} {contact.name.last}
                  {contact.mobile}
                   {contact.email}
                
              
            </li>
          ))}
        
      </div>
    );
  }
}

export default Contact;
