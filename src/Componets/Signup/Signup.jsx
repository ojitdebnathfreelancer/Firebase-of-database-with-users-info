import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { db } from '../../firebase/firebase.config';
import { collection, getDocs, updateDoc, deleteDoc, doc, addDoc, getDoc, } from 'firebase/firestore';
import { toast } from 'react-hot-toast';



const auth = getAuth(app);
const userCollectionRef = collection(db, "users");


export const addUser = (user) => {
    return addDoc(userCollectionRef, user)
};
// add user to firestore 

export const allUsers = () => {
    return getDocs(userCollectionRef)
};
// get all user from firestore 

export const singleUser = (id) => {
    const User = doc(db, "users", id);
    return getDoc(User);
}
// single user for update 

export const deleteUser = (id) => {
    const deleteUser = doc(db, "users", id);
    return deleteDoc(deleteUser);
}
// delete user from firestore 

export const updateUser = (id, updatedDoc) => {
    const updateUser = doc(db, "users", id);
    return updateDoc(updateUser, updatedDoc);
}
// delete user from firestore 


const Signup = () => {

    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const number = form.number.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(resut => {

                const user = {
                    name,
                    number,
                    email: resut.user.email
                };

                if (user) {
                    addUser(user);
                    toast.success("User added sucessfully");
                    form.reset();
                }

            })
            .catch(erro => console.error(erro));
    };
    // user singup 

    return (

        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <div className="card flex-shrink-0 h-96 w-full max-w-lg shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={(e) => handelSubmit(e)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <input type="text" name='number' placeholder="Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;