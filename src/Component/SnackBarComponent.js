import React from 'react';
import * as PropTypes from "prop-types";

import clsx from 'clsx';
import { Button, CircularProgress, IconButton, Snackbar, SnackbarContent, makeStyles } from '@material-ui/core';
import { amber, green } from '@material-ui/core/colors';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import red from "@material-ui/core/colors/red";

SnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    hasUndoButton: PropTypes.bool,
    onUndo: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'successUndo', 'warning', 'error', 'info', 'wait']).isRequired,
};

SnackBarComponent.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'successUndo', 'warning', 'error', 'info', 'wait']).isRequired,
    onUndo: PropTypes.func,
};

const variantIcon = {
    success: CheckCircleIcon,
    successUndo: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
    wait: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    successUndo: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: red[600],
    },
    info: {
        backgroundColor: theme.palette.secondary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    wait: {
        backgroundColor: theme.palette.secondary.main,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

// SEE https://gitlab.com/sia-insa-lyon/dev/homepagesia/homepagesia-front/-/blob/master/src/Component/SnackBarComponent.js
function SnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, hasUndoButton, onUndo, variant } = props;
    const Icon = variantIcon[variant];
    const action = [
        <IconButton key="close" aria-label="Close" color="inherit" onClick={onClose}>
            <CloseIcon className={classes.icon}/>
        </IconButton>
    ];

    const undoAction = [
        <Button key="undo" aria-label="Undo" color="inherit" size="small" onClick={onUndo}>
            Annuler
        </Button>
    ];

    return (
        <SnackbarContent className={clsx(classes[variant], className)} aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    {variant==="wait"
                        ?<CircularProgress color={"primary"} size={20} className={classes.iconVariant}/>
                        :<Icon className={clsx(classes.icon, classes.iconVariant)} />}
                    {message}
                </span>
            }
            action={(hasUndoButton !== undefined) && (hasUndoButton === true)
                ? undoAction.concat(action)
                : action}
        />
    );
}


export default function SnackBarComponent({message, type, onUndo}) {
    const [open, setOpen] = React.useState(true);

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    function handleUndo() {
        onUndo();
        setOpen(false);
    }

    React.useEffect(()=>{
        if((open === false) && (message !== '') && (type === "wait")){
            setOpen(true);
        }
    }, [open, message, type]);

    return (
        <div>
            <Snackbar autoHideDuration={6000}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center',}} onClose={handleClose} open={open}>

                <SnackbarContentWrapper hasUndoButton={(type==="successUndo")} message={message}
                    onClose={handleClose} onUndo={handleUndo} variant={type}/>
            </Snackbar>
        </div>
    );
}
