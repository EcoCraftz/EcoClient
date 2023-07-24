import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../Firebase/firebase.config';
const UserProfile = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const email = user?.email;
    const name = user?.displayName;



    const handleSubmit = e => {
        e.preventDefault();
        const profile = {
            address: e.target.address.value,
            name: name,
            email: email,
            company: e.target.company.value,
            designation: e.target.designation.value,
            link: e.target.link.value,
            phone: e.target.phone.value

        }
        console.log(profile);
        fetch(`http://localhost:4000/profile`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile),
        }).then(res => res.json()).then(data => console.log(data))
        alert('Your profile is saved to data base')

    }



    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Hi! {user?.displayName}</h2>
                    <p className='text-lg font-bold'>Email: {user?.email}</p>
                    <p className='text-lg uppercase'>You can Save Your profile</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Company Name</span>
                            </label>
                            <input type="text" name='company' placeholder="Type Company name" className="input input-bordered w-full max-w-xs mb-2" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Designation</span>
                            </label>
                            <input type="text" name='designation' placeholder="Type your possition to the company" className="input input-bordered w-full max-w-xs mb-2" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea type="text" name='address' placeholder="Type your Address" className="input input-bordered w-full max-w-xs mb-2" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Social Link </span>
                            </label>
                            <input type="text" name='link' placeholder="Give Linkedin/fb link" className="input input-bordered w-full max-w-xs mb-2" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact Number</span>
                            </label>
                            <input type="number" name='phone' placeholder="Type Contact number" className="input input-bordered w-full max-w-xs mb-2" />
                        </div>
                        <input type="submit" value="Add to Server" className="btn btn-success w-full max-w-xs mb-2" />
                    </form>
                    {/* <input type="button"
                        onClick={() => navigate(`/dashboard/updateProfile/${email}`)}
                        value="update" className="btn btn-warning w-full max-w-xs mb-2" /> */}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;