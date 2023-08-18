import React, { useState } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  Alert
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { LoginWrapper } from './style'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { fetchAcountLoginAction } from '@/store/modules/user'
import localCache from '@/utils/localCache'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">tlfc</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function SignIn() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [open, setOpen] = React.useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(fetchAcountLoginAction({ username, password }))
      .then(() => {
        const token = localCache.getCache('token')
        if (typeof token == 'undefined') {
          setOpen(true)
        }
        if (token) navigate('/')
      })
      .catch
      // <Alert severity="error">This is an error alert — check it out!</Alert>
      ()
  }
  function handleAlert(event?: any, reason?: string) {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  return (
    <LoginWrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            登录
          </Typography>
          <form className="form" noValidate>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="用户名"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="密码"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <TextField
              error
              id="outlined-error-helper-text"
              label="密码格式错误"
              defaultValue="密码 *"
              helperText="你的密码必须含有以字母开头，以数字结束"
              variant="outlined"
            /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="记住密码"
            />
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              登录
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  忘记密码?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {'没有账号？注册'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleAlert}
      >
        <Alert onClose={handleAlert} severity="error">
          没有Token
        </Alert>
      </Snackbar>
    </LoginWrapper>
  )
}
