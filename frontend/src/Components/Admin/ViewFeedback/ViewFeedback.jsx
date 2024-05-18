import React, { useEffect, useState } from 'react';
import './ViewFeedback.css';
import { Link } from 'react-router-dom';
import { fetchUserFeedback } from '../../../Services/adminApi';

export default function ViewFeedback() {
    const [feedbackData, setFeedbackData] = useState([]);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        fetchUserFeedback()
            .then((response) => {
                console.log(response?.data?.feedbackData, "FEEDBACK");
                if (response?.data?.status) {
                    setFeedbackData(response?.data?.feedbackData);
                } else {
                    setError('Failed to fetch feedback');
                }
            })
            .catch((err) => {
                console.error('Error fetching feedback:', err);
                setError('Error fetching feedback');
            });
    }, []);

    return (
        <div>
            <div className="div2" id='div2'>
                <section>
                    <div className="container">
                        <div className="row">
                            <h2>Feedback</h2>
                            {error && <p className="error-message">{error}</p>}
                            {feedbackData.length > 0 ? (
                                feedbackData.map((value, index) => (
                                    <div id='box3' key={index}>
                                        <input
                                            type="text"
                                            id='vft1'
                                            value={value?.userId?.username}
                                            readOnly
                                            aria-label="Username"
                                        />
                                        <input
                                            type="text"
                                            id='vft2'
                                            value={value?.category}
                                            readOnly
                                            aria-label="Category"
                                        />
                                        <Link to={`/admin/feedback_view/${value?._id}`}>
                                            <input type="button" id='vfb1' value="View" aria-label="View Feedback" />
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <p>No User's feedback</p>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
