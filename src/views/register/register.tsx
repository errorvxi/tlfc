import React, { useState } from 'react'

import { RegisterWrapper } from './style'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from '@mui/material'
import { useAppDispatch } from '@/store'
import { fetchAcountRegisterAction } from '@/store/modules/user'
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">tlfc</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Register() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(fetchAcountRegisterAction({ username, password, displayName }))
      .then((res: any) => {
        console.log(res)
        navigate('/login')
      })
      .catch()
  }
  return (
    <RegisterWrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            注册
          </Typography>
          <form className="form" noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="fname"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="用户名"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setDisplayName(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  id="display-name"
                  label="花名"
                  name="display-name"
                  autoComplete="display-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="密码"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              注册
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  已经有账号? 登录
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </RegisterWrapper>
  )
}
