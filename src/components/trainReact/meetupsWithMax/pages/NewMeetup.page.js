import React from 'react';
import NewMeetupForm from '../meetups/NewMeetupForm.meetups';

export default function NewMeetupPage() {
    const addMeetupHandler = (meetupData) => {
        fetch(
            'https://gmweb-react-default-rtdb.europe-west1.firebasedatabase.app/meetups',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'access-control-allow-origin': '*',
                    'Content-Type': 'application/json',
                },
            }
        );
    };

    return (
        <div>
            <h1 className='meetup-h1'>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    );
}
