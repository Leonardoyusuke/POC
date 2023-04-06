import { db } from "../database/database.js";

type movies = {
    id:number,
    title:string,
    plataform:string,
    gender:string,
    status:boolean,
    score:number
}

export async function addMovie(movies:movies) {
 return await db.query(`
    INSERT INTO movies (
        "title",
        "plataform",
        "gender"
    )
    Values($1,$2,$3) 
    `,[movies.title,movies.plataform,movies.gender])   
}

export async function getMoviesByPlataform(plataform:movies["plataform"]) {
    return await db.query(`
    SELECT * FROM movies
    WHERE plataform = $1`,
    [plataform])
}
export async function getMoviesByGender(gender:movies["gender"]) {
    return await db.query(`
    SELECT * FROM movies
    WHERE gender = $1`,
    [gender])
}

export async function updateById(id:movies,status:movies,score:movies) {
    return await db.query(`
    UPDATE movies
    SET status=$1,score=$2
    WHERE id=$3`,[status,score,id])
    
}

export async function getNumberByPlataform(plataform:movies["plataform"]) {
    return await db.query(`
    SELECT COUNT(plataform) as "Quantity"
    FROM movies
    WHERE plataform=$1`,[plataform])
    
}
export async function getNumberByGender(gender:movies["gender"]) {
    return await db.query(`
    SELECT COUNT(gender) as "Quantity"
    FROM movies
    WHERE gender=$1`,[gender])   
}
export async function deleteMovieById(id:movies["id"]) {
    return await db.query(`
    DELETE FROM movies
    WHERE id=${id}`)
}