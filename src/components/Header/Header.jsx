import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (

        <header className={s.header}>
            <nav className={s.logo}>

            <div>
                <img src='https://4.downloader.disk.yandex.ru/preview/7503d92455e976dd99ead5b595637a8792ba56771f3db366b491fef9a6d218f6/inf/tQIFqrnaVnXdOG5YNFLQxVfCv87CzI-uuGG_ILK_jo3H34JnJtcn0Gzseg-WIiYEFmcPCwj5j4XGSotzdaxmyg%3D%3D?uid=375807288&filename=cat1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=375807288&tknv=v2&size=1903x937'></img>

                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div className={s.colorWhite}>{props.login} <button onClick={props.logoutTC}>Log out</button></div>
                        : <NavLink to={'/login'} className={s.colorWhite}>Login</NavLink>}
                </div>
            </div>
            </nav>
        </header>

    );
}

export default Header;