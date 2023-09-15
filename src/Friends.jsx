import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data));
    }, [])
    return (
        <div className="box">
            <h3>Friends : {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }</h3>
        </div>
    )
}