import React, {useEffect, useState} from 'react';
import MyMaterial from '../materialUI/myMaterial';
import useStyles from '../styles/DiscussionListStyle';
import Message from "./Message";
import $ from 'min-jquery';

export default function DiscussionList() {
    const [discussionList, setDiscussionList] = useState();
    const [username, setUsername] = useState('');

    const classes = useStyles();

    useEffect(() => {
        $.ajax({
            type: 'GET',
            url: '/discussion',
            success: function (data) {
                setDiscussionList(JSON.parse(data));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
    }, []);

    const message = (event) => {
        setUsername(event.discussion.username)
    }

    return (
        <MyMaterial.Grid container className={classes.height} spacing={1}>
            <MyMaterial.Grid container direction="column" justify="center" alignItems="center" className={classes.listDiscussion}
                  item xs={3}>
                {
                    discussionList
                        ? (discussionList.map(discussion =>
                            <MyMaterial.Grid item key={discussion.username}>
                                <div className={classes.username}
                                     onClick={() => message({discussion})}>{discussion.username}</div>
                            </MyMaterial.Grid>
                        ))
                        : <MyMaterial.TextField value="Loading..."/>
                }
            </MyMaterial.Grid>
            <MyMaterial.Grid container direction="column" justify="center" alignItems="center" className={classes.height} item xs>
                {username
                    ? <Message username={username}/>
                    : null
                }
            </MyMaterial.Grid>
        </MyMaterial.Grid>
    );
}