import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    exist: {
        background: 'red',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '2px 2px 0px 30px',
        marginTop: '5px'
    },
    noExist: {
        background: 'green',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '2px 2px 0px 30px',
        marginTop: '5px'
    },
    top: {
        position: 'absolute',
        top: '40%',
        width: '100%'
    },
    white: {
        color: 'white'
    },
});

export default useStyles;