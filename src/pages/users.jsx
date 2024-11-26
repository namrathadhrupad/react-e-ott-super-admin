import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Users = () => {
    return(
        <Container>
            className={className}
            style={{paddingBottom: "1rem"}}
            {children}
        </Container>
    )
}

export default Users;