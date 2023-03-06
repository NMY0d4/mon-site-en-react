import React from 'react';
import Card from '../ui/Card.ui';
import styles from './NewMeetupForm.module.scss';

export default function NewMeetupForm() {
    return (
        <Card>
            <form className={styles.form}>
                <div className={styles.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' />
                </div>
                <div className={styles.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5'></textarea>
                </div>
                <div className={styles.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
