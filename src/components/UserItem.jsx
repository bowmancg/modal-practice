import React from "react";
import Card from "./UI/Card";

const UserItem = (props) => {
    return (
        <div>
            <Card>
                <h3>{props.username}</h3>
                <p>{props.age}</p>
            </Card>
        </div>
    )
}

export default UserItem