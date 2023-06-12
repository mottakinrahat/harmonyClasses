// FeedbackPage.jsx
import React, { useState } from 'react';

const FeedbackPage = ({ adminAdData, refetch }) => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleSubmit = () => {
        fetch(`https://assignment-12-harmony-class-server.vercel.app/users/feedback/${adminAdData._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    refetch();
                    // Handle success message or any other action
                    console.log('Feedback submitted successfully');
                }
            })
            .catch((error) => {
                console.error('Error saving feedback:', error);
            });
    };

    return (
        <div>
            <h2>Feedback Submission Page</h2>
            <textarea 
                className="textarea"
                placeholder="Enter your feedback"
                onChange={handleFeedbackChange}
            />
            <button className="btn" onClick={handleSubmit}>
                Submit Feedback
            </button>
        </div>
    );
};

export default FeedbackPage;
