import { Container, Input, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";


const Profile = () => {
    const srcComment = "http://localhost:3001/comments"

    const [comments, setComments] = useState("comment")
    useEffect(() => {
        axios
            .get(srcComment)
            .then(data => { setComments(data.data[1].body) })
    }, [])
    console.log(111, comments)
    return (
        <Container>
            <Typography variant="h4">
                About me
            </Typography>

            <div>
                {comments}
            </div>

        </Container>
    );
};

export default Profile;