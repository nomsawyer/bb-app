import React, { useState, useEffect } from 'react';
import { logout } from '../../module/auth/login';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TimeLine from '../TimeLine';
import { Link } from 'react-router-dom';
import { UserDetail } from '../../module/auth/register';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Profile = (props:any) => {
  // const [user, setUser] = useState<UserDetail>(initialValue)

  // useEffect(() => {
  //   getUserById()
  // },[])

  // const getUserById = async() => {
  //   const url = `/api/v1/users/${props.location.state.uid}`
  //   console.log(user._id)
  //   try {
  //     await axios.get(url)
  //       .then((res) => {
  //         setUser(res.data)
  //         console.log(res.data)
  //       })
  //   } catch(error) {
  //     console.error(error)
  //   }
    
  // }
  
  const classes = useStyles()

  return(
    <>
      <p>プロフィール</p>
      <Button 
        variant="contained"
        color="primary"
      >
        プロフィール編集
      </Button>
      <Button onClick={logout} variant="contained" color="secondary">ログアウト</Button>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <p>ユーザー名{props.location.state.user.username}</p> */}
            <p>ユーザー名</p>
          </Grid>
          <Grid item xs={12}>
            <p>bio</p>
          </Grid>
          <Grid item xs={6}>
            <p>Followers</p>
          </Grid>
          <Grid item xs={6}>
            <p>Following</p>
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
          <Grid item xs={6}>
            <TimeLine />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Profile