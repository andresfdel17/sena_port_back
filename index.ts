import app from "./src/Server";
const port: string = app.get("PORT");
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});