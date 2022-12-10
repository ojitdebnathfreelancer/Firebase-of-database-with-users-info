import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { singleUser, updateUser } from '../Signup/Signup';

const Update = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate();


    const { id } = useParams();

    const getUser = async () => {
        const gotUser = await singleUser(id);
        setName(gotUser.data().name);
        setEmail(gotUser.data().email);
        setNumber(gotUser.data().number);
    };

    useEffect(() => {
        if (id !== undefined && id !== '') {
            getUser()
        }
    }, [id]);

    const handelUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const number = form.number.value;
        const email = form.email.value;

        const updatedText = {
            name,
            email,
            number
        };
        // new info for update 

        await updateUser(id, updatedText);
        toast.success('User updated sucessfully');
        navigate('/users');
    };
    // update user 

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="card flex-shrink-0 h-96 w-full max-w-lg shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={(e) => handelUpdate(e)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" defaultValue={name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <input type="text" name='number' placeholder="Number" className="input input-bordered" defaultValue={number} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" defaultValue={email} required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;