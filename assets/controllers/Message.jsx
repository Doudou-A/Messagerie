import React, {useState, useEffect} from 'react';
import MyMaterial from '../materialUI/myMaterial';
import useStyles from '../styles/MessageStyle.js'
import $ from 'min-jquery';

export default function Message(props) {

    const classes = useStyles();
    return (
        <MyMaterial.Grid>{props.username}</MyMaterial.Grid>
    )
}