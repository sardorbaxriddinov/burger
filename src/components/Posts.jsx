import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=12")
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition">Read More</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts;

