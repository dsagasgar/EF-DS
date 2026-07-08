import "dotenv/config";
import app from "./src/app.js";

const port = process.env.PORT;

app.listen(port, "0.0.0.0", () => {
    console.log(`api-gateway running on port ${port}`);
});
