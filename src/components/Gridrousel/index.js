import React from "react";
import { Grid } from './Gridrousel'

const Gridrousel = (props) => {
    return (
        <Grid>
            {props.children} 
        </Grid>
    );
}

export default Gridrousel;