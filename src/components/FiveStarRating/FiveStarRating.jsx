import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
    const stars = [];
    const starFill = Math.floor(rating);
    const hasStarHalf = rating - starFill >= 0.5;
    const emptyStarCount = 5 - starFill - (hasStarHalf ? 1 : 0);

    for (let i = 0; i < 5; i++) {
        if (rating >= 1) {
            stars.push(
                <StarFill className={s.star_fill} key={"star-fill" + i} />,
            );
        } else if (hasStarHalf) {
            stars.push(<StarHalf className={s.star_half} key={"star-fill"} />);
        } else {
            stars.push(<StarEmpty key={"star-empty"} />);
        }
        rating--;
    }
    console.log(starFill, hasStarHalf, emptyStarCount);

    return <div>{stars}</div>;
}
