import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    message: {
        background: "#3f51b5",
        border:"1px solid white",
        color: "white",
        padding: "15px"
    },
    inputMessage: {
        background: "white",
        borderRadius: "30px",
        width: "90%",
        marginTop: "auto",
        marginBottom: "auto",
        padding: "5px"
    },
    gridMessage: {
        height: "80% !important",
        background: "white",
        padding: "10px"
    },
    height: {
        height: "100%"
    },
    iconSubmitMessage: {
        color: "white",
        padding: "0px"
    }
});

export default useStyles;