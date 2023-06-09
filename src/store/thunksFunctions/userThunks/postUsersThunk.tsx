import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RegisterUser } from "../../../interface/UserInfoInterface";

export const postUsersThunk = createAsyncThunk(
  "users/waitUsers",
  async (newUser: RegisterUser) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/users",
      newUser
    );
    return response.data;
  }
);
