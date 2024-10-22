import express from "express";

const app = express();
const port = 3000;

// Setting the view engine to EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay(); // Get the current day (0 = Sunday, 1 = Monday, etc.)

    // Determine if it is a weekday or weekend
    let dayType;
    let advice;

    if (day === 0 || day === 6) { // 0 = Sunday, 6 = Saturday
        dayType = "a weekend";
        advice = "Time to relax!";
    } else {
        dayType = "a weekday";
        advice = "It's time to work hard!";
    }

    // Render the EJS template with the appropriate values
    res.render("index", {
        dayType: dayType,
        advice: advice,
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
