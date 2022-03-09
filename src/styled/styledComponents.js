import styled from 'styled-components';
import { InputBase } from "@mui/material";

const handleWidth = wide => {
    switch(wide) {
        case "fullWidth": 
            return "100%"
        case "mediumWidth":
            return "60%"
        default :
        return "160px";
    }
}

export const NetflixButton = styled.button`
    background-color: ${({ color }) => color === "gray" ? "lightgray" : "red" };
    z-index: 15;
    color: #fff;
    border-radius: ${({radius}) => radius ? "5px" : "0px"};
    text-transform: inherit;
    padding: 15px;
    font-size:1.1rem;
    outline:none;
    border: none;
    cursor: pointer;
    width: ${({ wide}) => handleWidth(wide)}`;

    export const NetflixInput = styled(InputBase)`
    z-index: 30;
    background: #fff;
    padding: 25px;
    height: 30px;
    border-radius: 5px;
    border: none;
    `;