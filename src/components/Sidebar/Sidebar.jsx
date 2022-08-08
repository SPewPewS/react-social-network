import React from "react";
import s from './Sidebar.module.css'
import Message from "../Dialogs/Message/Message";

const Sidebar = (props) => {

    /*let messagesElements = props.messages.map(message => <Message message={message.message} /> )*/


    return (
        <div className={s.sidebar}>
            <div>
                <img
                    src='https://2.downloader.disk.yandex.ru/preview/1186652f4246febc7eefe1724ac9d399e39099a087e31f4d985f285400647008/inf/B9hwefsqRikYZLowDZXFYRLQpwZmeCecXHmBFZbvTKeDiiTo7o0YkSxn4L-sL2GLIYYDRnA3JXtIV_0uFrN5bw%3D%3D?uid=375807288&filename=friend1.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=375807288&tknv=v2&size=1903x937'/>
            </div>
            {props.friends}
        </div>


    )

}

export default Sidebar;