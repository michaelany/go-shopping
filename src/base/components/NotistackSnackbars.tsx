import {
  SnackbarProvider,
  enqueueSnackbar,
  closeSnackbar,
  SnackbarAction,
} from 'notistack'
import {IconButton, SnackbarOrigin} from '@mui/material'
import {CloseRounded as CloseIcon} from '@mui/icons-material'

export default function NotistackSnackbars() {
  return <SnackbarProvider anchorOrigin={anchorOrigin} action={action} />
}

export const showSnackbar = (
  message: string,
  variant: 'success' | 'error' = 'success'
) =>
  enqueueSnackbar(<p>{message}</p>, {
    variant,
  })

const action: SnackbarAction = (snackbarId) => {
  const handleClose = () => closeSnackbar(snackbarId)
  return (
    <>
      <IconButton
        className="Snackbar-Close"
        size="medium"
        color="inherit"
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </>
  )
}

const anchorOrigin: SnackbarOrigin = {vertical: 'top', horizontal: 'right'}
