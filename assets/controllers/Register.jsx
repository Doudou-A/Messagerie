import React, {useState} from 'react';
import $ from "min-jquery";
import {Grid} from "@material-ui/core";
import MyMaterial from "../materialUI/myMaterial";
import useStyles from "../styles/RegisterStyle";

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
            type: 'GET',
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
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/register',
            data: {
                "username": value
            },
            success: function () {
                window.location.href = "discussion-list";
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
    }

    return (
        <form className={classes.top}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                <Grid item xs={3}>
                    <MyMaterial.TextField value={value} onChange={handleChange}
                                          variant="filled"
                                          label="Choisir un Pseudo" fullWidth={true}/>
                </Grid>
                <Grid item xs={1}>
                    <MyMaterial.IconButton color="primary" onClick={handleSubmit} component="span" label="button" disabled={disabledButton}>
                        <MyMaterial.DoubleArrowRoundedIcon />
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
        </form>
    );
}