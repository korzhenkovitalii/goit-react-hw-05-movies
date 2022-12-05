import { useFetchMovies } from "hooks/useFetchMovies";

export const Cast = () => {
    const [casts] = useFetchMovies();

    return (
        casts && (<div>{casts.map(cast=>cast.name) }</div>)
    )
}