import React, { useEffect, useState } from 'react';

const AdminTable = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/allServiceList`)
            .then(response => response.json())
            .then(data => setDetails(data))

    }, [])
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </main>
        </div >
    );
};

export default AdminTable;