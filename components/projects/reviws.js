import React, { useState } from "react";
import Styles from './reviws.module.css';
const apiURL = "https://randomuser.me/api/";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const generateReview = () => {
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
                const location = `${user.location.city}, ${user.location.country}`;
                const review = {
                    name,
                    location,
                    age: user.dob.age,
                    image: user.picture.medium,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                };
                setReviews([...reviews, review]);
            });
    };

    return (
        <div className={Styles.reviews}>
            {reviews.map(review => (
                <div className={Styles.review} key={review.name}>
                    <img src={review.image} alt={review.name} />
                    <div className={Styles.name}>{review.name}</div>
                    <div className={Styles.age}>{review.age}</div>
                    <div className={Styles.location}>{review.location}</div>
                    <div className={Styles.text}>{review.text}</div>
                </div>
            ))}
            <button className={Styles.generatebutton} onClick={generateReview}>
                Load New Review
            </button>
        </div>
    );
};

export default Reviews;