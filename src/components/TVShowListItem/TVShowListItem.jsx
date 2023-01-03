import { SMALL_IMG_COVER_BASE_URL } from "../../api/config";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowListItem({ tvShow }) {
    const rating = tvShow.vote_average / 2;
    return (
        <div className={s.container}>
            <img
                className={s.img}
                src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
                alt={tvShow.name}
            />
            <div className={s.title_rating}>
                <div className={s.title}>
                    {tvShow.name}
                    <div className={s.rating}>
                        <FiveStarRating rating={rating} />
                    </div>
                </div>
            </div>
        </div>
    );
}
