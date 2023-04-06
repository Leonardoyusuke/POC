import { Request,Response } from "express"
import { addMovie, deleteMovieById, getMoviesByGender, getMoviesByPlataform, getNumberByGender, getNumberByPlataform, updateById } from "../repositories/movies.repositories.js"


export async function insertMovie(req:Request, res:Response) {
    const movies = req.body
    console.log(movies,"movie")
    try {
        const insert = await addMovie(movies)
        res.status(200).send("created")

    } catch (error) {
        res.status(500).send(error.message);
    }
}
export async function getmoviesPlataform(req:Request,res:Response) {
    const plataform = req.params.plataform
    console.log(plataform)
    try {
        const getMoveis = await getMoviesByPlataform(plataform)
        res.send(getMoveis.rows)
    } catch (error) {
        res.status(500).send(error.message);

    }
}

export async function getmoviesGender(req:Request,res:Response) {
    const gender = req.params.gender
    console.log(gender)
    try {
        const getMoveis = await getMoviesByGender(gender)
        res.send(getMoveis.rows)
    } catch (error) {
        res.status(500).send(error.message);
    }
}
export async function updateMovie(req:Request,res:Response) {
    const {id,status,score} = req.body
    console.log(id,status,score)

    try {
        const update = await updateById(id,status,score)
        console.log(update)
        res.send("update")
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getNumberPlataform(req:Request,res:Response) {
    const plataform = req.params.plataform
    console.log(plataform)
    try {
        const number = await getNumberByPlataform(plataform)
        res.status(200).send(number.rows)

    } catch (error) {
        res.status(500).send(error.message);
    }
    
}
export async function getNumbergender(req:Request,res:Response) {
    const gender = req.params.gender
    console.log(gender)
    try {
        const number = await getNumberByGender(gender)
        res.status(200).send(number.rows)

    } catch (error) {
        res.status(500).send(error.message);
    }

}
export async function deleteMovie(req:Request,res:Response) {
    const id = req.body.id
    try {
        const delet = await deleteMovieById(id)
        res.status(200).send("DELETE")
    } catch (error) {
        res.status(500).send(error.message);

    }
}
