import React, {useState, useEffect} from 'react';
import MyMaterial from '../materialUI/myMaterial';
import useStyles from '../styles/MessageStyle.js'
import $ from 'min-jquery';

export default function Message(props) {
    const [message, setMessage] = useState('');
    const [listMessage, setListMessage] = useState([]);

    const getData = async () => {
        $.ajax({
            type: 'GET',
            url: '/message/',
            data: {
                "idDiscussion": props.discussion.discussions[0].id
            }, success: function (data) {
                setListMessage(JSON.parse(data));
            },
            error(XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
    };

    useEffect(() => {
        getData();
    }, [props]);

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = () => {
        $.ajax({
            type: 'Post',
            url: '/message/create',
            data: {
                "message": message,
                "idDiscussion": props.discussion.discussions[0].id
            },
            success: function (data) {
               getData();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
        setMessage('');
    }

    const classes = useStyles();
    return (
        <MyMaterial.Grid container direction="column" className={classes.height} item xs>
            <MyMaterial.Grid className={classes.message} item xs>{props.discussion.username}</MyMaterial.Grid>
            <MyMaterial.Grid container direction="column" className={classes.gridMessage} item>
                {listMessage
                    ? (listMessage.map(message =>
                        <MyMaterial.Grid key={message.id}>{message.text}</MyMaterial.Grid>
                    ))
                    : null
                }
            </MyMaterial.Grid>
            <MyMaterial.Grid container justify="center" className={classes.message} item xs>
                <MyMaterial.TextField value={message} onChange={handleChange} className={classes.inputMessage}/>
                <MyMaterial.IconButton className={classes.iconSubmitMessage} onClick={handleSubmit}>
                    <MyMaterial.DoubleArrowRoundedIcon/>
                </MyMaterial.IconButton>
            </MyMaterial.Grid>
        </MyMaterial.Grid>
    )
}