import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./api/config";
import { useEffect, useState } from "react";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";
import logo from "./assets/images/logo_cinema.png";
import "./global.css";
import s from "./style.module.css";

export function App() {
    const [currentTVShow, setCurrentTVShow] = useState();

    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopulars();
        if (populars.length > 0) {
            setCurrentTVShow(populars[0]);
        }
    }
    // eslint-disable-next-line no-undef
    useEffect(() => {
        fetchPopulars();
    }, []);

    console.log("***", currentTVShow);
    return (
        <div
            className={s.main_container}
            style={{
                background: currentTVShow
                    ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
                    : "black",
            }}
        >
            <div className={s.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo
                            image={logo}
                            title="O'FLIX"
                            subtitle="Movies ou Challenges ?"
                        />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <input style={{ width: "100%" }} type="text" />
                    </div>
                </div>
            </div>
            <div className={s.tv_show_detail}>
                {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
            </div>
            <div className={s.recommandation}>
                {currentTVShow && <TVShowListItem tvShow={currentTVShow} />}
            </div>
        </div>
    );
}