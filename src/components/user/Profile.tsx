import React, { useState } from "react";
import { RootState } from "../../store/store";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Avatar, Box, Button, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useHandleGoToHomePage } from "../../utils/buttonNavigate";
import { RegisterUser, UpdateUser } from "../../interface/UserInfoInterface";
import { useAppDispatch } from "../../store/hooks";
import { putUsersThunk } from "../../store/thunksFunctions/userThunks/putUsersThunk";

export const Profile = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newId, setNewId] = useState(0);

  const selectUserState = (state: RootState) => state.loggedInUser;
  const selectUser = createSelector(selectUserState, (state) => state);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleGoToHomePage = useHandleGoToHomePage();

  if (!user.loggedIn) {
    navigate("/login");
    return null;
  }

  const handleChangeDetail = () => {
    const updateUser: UpdateUser = {
      id: newId,
    };

    if (newEmail !== "") {
      updateUser.email = newEmail;
    }
    if (newName !== "") {
      updateUser.name = newName;
    }
    if (newPassword !== "") {
      updateUser.password = newPassword;
    }
    if (newAvatar !== "") {
      updateUser.avatar = newAvatar;
    }
    if (Object.keys(updateUser).length > 0) {
      console.log("updating");
      dispatch(putUsersThunk(updateUser));
    }
  };

  if (user.role === "admin") {
    return (
      <Container>
        <Box sx={{ color: "white" }}>
          <Button onClick={handleGoToHomePage} variant="outlined">
            Back to start
          </Button>
          <h2>User profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Avatar: </p>
          <Avatar alt={user.name} src={user.avatar}></Avatar>
          <p>Customer ID: {user.id}</p>
        </Box>
        <Box sx={{ color: "white" }}>
          <h2>Edit user</h2>
          <TextField
            label="User ID"
            type="number"
            defaultValue=""
            name="User ID"
            onChange={(e) => setNewId(Number(e.target.value))}
          />
          <TextField
            label="Name"
            defaultValue=""
            name="name"
            onChange={(e) => setNewName(e.target.value)}
          />
          <TextField
            label="Link to avatar"
            defaultValue=""
            name="avatar"
            onChange={(e) => setNewAvatar(e.target.value)}
          />
          <TextField
            label="Email address"
            defaultValue=""
            name="email"
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <TextField
            label="Password"
            defaultValue=""
            type="password"
            name="password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button onClick={() => handleChangeDetail()} variant="outlined">
            Save
          </Button>
        </Box>
      </Container>
    );
  } else {
    return (
      <Container>
        <Box sx={{ color: "white" }}>
          <Button onClick={handleGoToHomePage} variant="outlined">
            Back to start
          </Button>
          <h2>User profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>
            Avatar: <Avatar src={user.avatar}></Avatar>
          </p>
          <p>Customer ID: {user.id}</p>
        </Box>
      </Container>
    );
  }
};