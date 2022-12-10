import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { allUsers, deleteUser} from '../Signup/Signup';

const Users = () => {

    const [fullUsers, setFullUsers] = useState([]);
    const [petch, setPetch] = useState(false);

    useEffect(() => {
        getallUsers();
    }, [petch])

    const getallUsers = async () => {
        const data = await allUsers()
        setFullUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    };
    // get all user from firestore 


    const handelDelete = async id => {
        const confirm = window.confirm("Are you want delete user");
        if (confirm) {
            await deleteUser(id);
            toast.success("User deleted sucessfully");
            setPetch(!petch);
        }
    };
    // delete user from firestore 

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nmae</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fullUsers.map((user, index) => <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>
                                <Link to={`/update/${user?.id}`}>
                                    <button className='btn btn-sm btn-primary'>Update</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handelDelete(user?.id)} className='btn btn-sm btn-warning'>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;