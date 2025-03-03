import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments?_limit=12")
      .then(response => setComments(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Comments</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {comments.map(comment => (
          <div key={comment.id} className="bg-white p-5 rounded-lg shadow-lg border border-gray-300">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{comment.name}</h2>
                <p className="text-sm text-gray-500">{comment.email}</p>
              </div>
            </div>
            <p className="mt-3 text-gray-700">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments;
