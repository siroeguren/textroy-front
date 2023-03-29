import './tweetForm.css'
import { useState } from "react";

function TweetForm() {
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => 
  {
    event.preventDefault();

    try {
      const response = await fetch('https://127.0.0.1:8000/api/auth/createTweet', 
      {
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json",
        //   'X-CSRF-TOKEN': ('meta[name="csrf-token"]').attr('content')
          
        },
        body: JSON.stringify({ content }),
        credentials: "include", // Send the JWT token in the cookie
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Crear un Tweet:</label>
      <input type="text" name="content" id="content" value={content} onChange={handleContentChange} />
      <input type="submit" value="Enviar Tweet" />
    </form>
  );
}

export default TweetForm;
