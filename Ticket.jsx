import React from 'react';

class Ticket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketlist: [],
            contactlist: [],
            agentlist: []
        }

    }

    componentDidMount() {
        fetch('http://localhost:4040/tickets')
            .then(res => res.json())
            .then(data => {
                this.setState({ ticketlist: data })
                return fetch('http://localhost:4040/contacts');
            })
            .then(res => res.json())
            .then(data => {
                this.setState({ contactlist: data })
                return fetch('http://localhost:4040/agents');
            })
            .then(res => res.json())
            .then(data => {
                this.setState({ agentlist: data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    getName = (arr, id) => {
        let name = arr.find((data) => data.id === id);
        console.log(arr, id, name);
        if(name===undefined)return "";
        return name.name.first + " " + name.name.last
    }

    

    render() {
        
        return (
            <div>
                <table >
                    <tr>
                        <th>Subject</th>
                        <th>Description</th>
                        <th>Contact</th>
                        <th>Agent</th>
                    </tr>
                    {this.state.ticketlist.map((ticket, index) => (

                        <tr key={index}>
                            <td> {ticket.subject} </td>
                            <td> {ticket.description} </td>
                            <td>{this.getName(this.state.contactlist, ticket.contactId)}</td>
                            <td>{this.getName(this.state.agentlist, ticket.agentId)}</td>
                            
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

export default Ticket
