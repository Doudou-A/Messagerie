import React, {useState} from 'react';
import $ from "min-jquery";
import MyMaterial from "./myMaterial";
import {Grid} from "@material-ui/core";
import useStyles from "./RegisterStyle";

export default function Register() {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState(0);
    const [classDispo, setClassDispo] = useState("");
    const [iconDispo, setIconDispo] = useState("");
    const [disabledButton, setDisabledButton] = useState(false);
    const classes = useStyles();

    const handleChange = (event) => {
        setValue(event.target.value);
        $.ajax({
            type: 'POST',
            url: '/get-pseudo/' + event.target.value,
            success: function (data) {
                (data == 'true' ?
                    (setClassDispo(classes.exist),
                        setIconDispo(<MyMaterial.BlockRoudedIcon/>),
                        setDisabledButton(true))
                    : (setClassDispo(classes.noExist),
                        setIconDispo(<MyMaterial.VerifiedUserRoundedIcon/>),
                        setDisabledButton(false)));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        $.ajax({
            type: 'POST',
            url: '/register',
            data: {
                "username": value
            },
            success: function (data) {

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
        window.location.href = "modus-create";
    }


    return (
        <form onSubmit={handleSubmit} className={classes.top}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item xs={3}>
                    <MyMaterial.TextField value={value} onChange={handleChange}
                                          variant="filled"
                                          label="Choisir un Pseudo" fullWidth={true}/>
                </Grid>
                <Grid item xs={1}>
                    <MyMaterial.IconButton color="primary" type="submit" component="span" disabled={disabledButton}>
                        <MyMaterial.DoubleArrowRoundedIcon/>
                    </MyMaterial.IconButton>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item style={{display: search ? "block" : "none"}}>
                    <div
                        className={classDispo}>
                        {search}
                        <MyMaterial.IconButton className={classes.white} type="submit"
                                               component="span">
                            {iconDispo}
                        </MyMaterial.IconButton>
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            {/*<Grid container direction="row" justify="center" alignItems="center">*/}
            {/*    <Grid item>*/}
            {/*        /!*<Grid container direction="row">*!/*/}
            {/*        <div style={{display: search ? "block" : "none"}} className={classTextDispo}*/}
            {/*             variant="outlined">{textDispo}</div>*/}
            {/*        /!*</Grid>*!/*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={1}>*/}
            {/*        */}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </form>
    );
}