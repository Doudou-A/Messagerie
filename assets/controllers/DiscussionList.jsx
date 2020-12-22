import React, {useEffect, useState} from 'react';
import MyMaterial from '../materialUI/myMaterial';
import useStyles from '../styles/DiscussionListStyle';
import Message from "./Message";
import $ from 'min-jquery';

export default function DiscussionList() {
    const [discussionList, setDiscussionList] = useState();
    const [discussion, setDiscussion] = useState();

    const classes = useStyles();

    useEffect(() => {
        $.ajax({
            type: 'GET',
            url: '/discussion',
            success: function (data) {
                console.log(JSON.parse(data));
                setDiscussionList(JSON.parse(data));
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert('Error : ' + errorThrown);
            }
        });
    }, []);

    const message = (event) => {
        setDiscussion(event.discussion)
    }

    return (
        <MyMaterial.Grid container className={classes.height} spacing={1}>
            <MyMaterial.Grid container direction="column" justify="center" alignItems="center" className={classes.listDiscussion}
                  item xs={2}>
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
            <MyMaterial.Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.messageContainer} item xs>
                {discussion
                    ? <Message discussion={discussion}/>
                    : null
                }
            </MyMaterial.Grid>
        </MyMaterial.Grid>
    );
}