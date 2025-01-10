require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

// Function to get OAuth2 Access Token
async function getAccessToken() {
  const tokenUrl = "https://www.reddit.com/api/v1/access_token";

  try {
    const response = await axios.post(
      tokenUrl,
      new URLSearchParams({
        grant_type: "password",
        username: process.env.REDDIT_USERNAME,
        password: process.env.REDDIT_PASSWORD,
      }),
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.CLIENT_SECRET,
        },
        headers: {
          "User-Agent": "my-reddit-app/0.1.0",
        },
      }
    );

    return response.data.access_token; // Return the Bearer Token
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response?.data || error.message
    );
    throw error;
  }
}

app.get("/", (req,res)=>{
  res.send("You are on the backend!");
})

app.get("/api/:subreddit/:sort", async (req, res) => {
    const { subreddit, sort } = req.params;
    const { limit = 10, after = null } = req.query;
  
    try {
      const accessToken = await getAccessToken();
      const url = `https://oauth.reddit.com/r/${subreddit}/${sort}/.json`;
  
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "User-Agent": "my-reddit-app/0.1.0",
        },
        params: {
          limit: parseInt(limit),
          after, 
        },
      });
  
      const posts = response.data.data.children;
      const nextAfter = response.data.data.after; // Token for the next page
  
      res.json({
        subreddit,
        sort,
        limit: parseInt(limit),
        after: nextAfter, // Token to be used for the next page
        posts,
      });
    } catch (error) {
      console.error(
        "Error fetching subreddit posts:",
        error.response?.data || error.message
      );
      res.status(500).json({ error: "Failed to fetch subreddit posts" });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
