import { Router } from "express";
import { moviesSchema, updateMovieSchema } from "../schemas/movies.schema.js";
import validateSchema from "../middlewares/movie.middlewares.js";
import { deleteMovie, getNumberPlataform, getNumbergender, getmoviesGender, getmoviesPlataform, insertMovie, updateMovie } from "../controllers/controllers.js";

const moviesRouter = Router()

moviesRouter.post("/movies",validateSchema(moviesSchema),insertMovie)
moviesRouter.get("/moviesbyplataform/:plataform",getmoviesPlataform)
moviesRouter.get("/moviesbygender/:gender",getmoviesGender)

moviesRouter.get("/moviesnumbergender/:gender",getNumbergender)
moviesRouter.get("/moviesnumberplataform/:plataform",getNumberPlataform)
moviesRouter.put("/movies",validateSchema(updateMovieSchema),updateMovie)
moviesRouter.delete("/movies",deleteMovie)

export default moviesRouter