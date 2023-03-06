import React from 'react';
import NewMeetupForm from '../meetups/NewMeetupForm.meetups';

export default function NewMeetupPage() {
    return (
        <div>
            <h1 className='meetup-h1'>Add New Meetup</h1>
            <NewMeetupForm />
        </div>
    );
}
