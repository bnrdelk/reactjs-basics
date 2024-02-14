import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeUsername } from "../ChangeUsername";

export const Profile = () => {
    const { username } = useContext(AppContext);

    return <div>
        This is the Profile Page!
        Username :  {username}
        <ChangeUsername/>
    </div>
}