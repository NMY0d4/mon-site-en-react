import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../meetups/NewMeetupForm.meetups';

export default function NewMeetupPage() {
    let navigate = useNavigate();
    const addMeetupHandler = (meetupData) => {
        fetch(
            'www.https://gmweb-react-default-rtdb.europe-west1.firebasedatabase.app/meetups',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            navigate('/trainReact/meetupsHome');
        });
    };

    return (
        <div>
            <h1 className='meetup-h1'>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
}
