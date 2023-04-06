import  express  from "express";
import moviesRouter from "./routes/movies.routes.js";


const server = express()
server.use(express.json())
server.use(moviesRouter)

server.listen(5005,() => {
    console.log("rodando...")
})