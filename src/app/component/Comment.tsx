"use client";
import React, { useState, useEffect } from "react";

// Define the shape of each comment
interface Comment {
  username: string;
  text: string;
}

const CommentSection: React.FC = () => {
  // State to store the username, comment, and the list of all comments
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);

  // Fetch saved comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !comment) return; // If either username or comment is empty, do nothing

    const newComment = { username, text: comment };
    const updatedComments = [...comments, newComment];

    // Update the state and localStorage with the new comment
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));

    // Clear input fields
    setUsername("");
    setComment("");
  };

  // Handle comment deletion
  const handleDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);

    // Update the state and localStorage with the remaining comments
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-rose-200 rounded-lg shadow-lg border border-rose-900">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Comment Section
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-rose-400"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-red-400 text-white font-semibold rounded-md hover:bg-rose-200"
        >
          Submit Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-blue-500">{comment.username}:</p>
              {/* Delete button */}
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
