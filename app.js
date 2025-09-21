// Setup.. this is similar to when we use our default tags in html
const express = require("express");
// we have to use cors in order to host a front end and backend on the same device
const cors = require("cors");
// active or tell this app variable to be an express server
const app = express();
const router = express.Router();

// enable CORS (during dev you can allow all; or restrict to your front-end origin)
app.use(cors()); 

// making an api using routes
// Routes are used to handle browser requests. The look like URLs. The difference is that when a browser requests a route,

router.get("/songs", function (req, res) {
  const songs = [
    {
      title: "We Found Love",
      artist: "Rihanna",
      popularity: 10,
      releaseData: new Date(2011, 9, 22),
      genre: ["electro house"],
    },
    {
      title: "Uptown Funk",
      artist: "Bruno Mars",
      popularity: 10,
      releaseData: new Date(2013, 11, 21),
      genre: ["funk", "boogie"],
    },
  ];
  res.json(songs);
});

// all request that usually use an api start with /api...
app.use("/api", router);

app.get("/", (_req, res) => res.send("API is up. Try /api/songs"));

// IMPORTANT for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
