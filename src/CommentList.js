import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const response = await axios.get(`http://localhost:3001/posts/${postId}/comments`);
            setComments(response.data.comments);
        };

        fetchComments();
    }, [postId]);

    return (
        <div>
            <ul className="list-group">
                {comments.map(comment => (
                    <li key={comment.id} className="list-group-item">{comment.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;