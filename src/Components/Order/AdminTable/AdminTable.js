import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    { value: 'Pending', label: 'Pending' },
    { value: 'On Going', label: 'On Going' },
    { value: 'Done', label: 'Done' }
]


const AdminTable = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/allServiceList`)
            .then(response => response.json())
            .then(data => setDetails(data))

    }, [])
    const change = (e, id) => {
        fetch(`http://localhost:8080/update/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: e.value})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Status updated successfully')
            }
        })
    }
    const defaultOption = options[0];
    return (
        <div>

            <main>
                <table className="table" style={{ marginLeft: '5vw', width: '70vw', marginTop: '5vw' }}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map(user => <tr className="bg-light" key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.service}</td>
                                <td>{user.description}</td>
                                <td><Dropdown options={options} onChange={(e) => {change(e, `${user._id}`)}} value={defaultOption} placeholder="Select an option" /></td>
                                

                                
                            </tr>)
                        }
                    </tbody>
                </table>
            </main>
        </div >
    );
};

export default AdminTable;