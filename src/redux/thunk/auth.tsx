import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Response } from "../types";
import { ERROR_CODE_TYPES } from "../../constants/error";
import { CreateTributeAttribute, FetchTributeResponse } from "../types/auth";



export const CreateTribute = createAsyncThunk<
  FetchTributeResponse,
  CreateTributeAttribute
>(
  "opti2.0/registerUser", // Fixed the action type name to be more accurate
  async (param, thunkApi) => {
    try {
      
      const result = await axios.post(
        `/api/auth/create-tribute`,
        param,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      
      let res_data = result.data as FetchTributeResponse;
      
      // This is the key fix - you need to return the data for fulfilled case
      return res_data;
      
    } catch (err: any) {
      
      let errobj = {
        errorCode: "",
        errorMsg: "",
      };

      // Check if it's an axios error with response
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        
        // Handle the new error format: { "status": "Failed", "errors": { ... } }
        if (
          typeof errorData === "object" &&
          errorData !== null &&
          errorData.status === "Failed" &&
          errorData.errors
        ) {
          // Extract error messages from the errors object
          const errors = errorData.errors;
          const errorMessages = Object.values(errors) as string[];
          
          errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
          errobj.errorMsg = errorMessages.length > 0 
            ? errorMessages.join(", ") 
            : "Validation error occurred";
        } 
        // Handle the old error format: { "responseCode": "...", "responseMessage": "..." }
        else if (
          typeof errorData === "object" &&
          errorData !== null &&
          "responseCode" in errorData
        ) {
          const typedError = errorData as {
            responseCode: string;
            responseMessage: string;
          };
          errobj.errorCode = typedError.responseCode;
          errobj.errorMsg = typedError.responseMessage;
        } 
        // Handle generic error format
        else {
          errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
          errobj.errorMsg = errorData.message || "Failed to send reset email";
        }
      } else {
        errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
        errobj.errorMsg = err.message || "Network error occurred";
      }

      
      // Use rejectWithValue to return the error object
      return thunkApi.rejectWithValue(errobj);
    }
  }
);



export const FetchTribute = createAsyncThunk<
  FetchTributeResponse
>(
  "auth/fetchUserProfile", // Fixed: Changed from "auth/forgetPassword" to match the actual function
  async (_, thunkApi) => {
    try {
      
      const result = await axios.get(
        `/api/auth/get-tribute`,
        {
          headers: {
            Accept: "application/json",
            // Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Added auth header
          },
        }
      );

      
      let res_data = result.data as FetchTributeResponse;
      
      // Return the data for fulfilled case
      return res_data;
      
    } catch (err: any) {
      
      let errobj = {
        errorCode: "",
        errorMsg: "",
      };

      // Check if it's an axios error with response
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        
        // Handle the new error format: { "status": "Failed", "errors": { ... } }
        if (
          typeof errorData === "object" &&
          errorData !== null &&
          errorData.status === "Failed" &&
          errorData.errors
        ) {
          // Extract error messages from the errors object
          const errors = errorData.errors;
          const errorMessages = Object.values(errors) as string[];
          
          errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
          errobj.errorMsg = errorMessages.length > 0 
            ? errorMessages.join(", ") 
            : "Validation error occurred";
        } 
        // Handle the old error format: { "responseCode": "...", "responseMessage": "..." }
        else if (
          typeof errorData === "object" &&
          errorData !== null &&
          "responseCode" in errorData
        ) {
          const typedError = errorData as {
            responseCode: string;
            responseMessage: string;
          };
          errobj.errorCode = typedError.responseCode;
          errobj.errorMsg = typedError.responseMessage;
        } 
        // Handle generic error format
        else {
          errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
          errobj.errorMsg = errorData.message || "Failed to fetch user profile";
        }
      } else {
        errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
        errobj.errorMsg = err.message || "Network error occurred";
      }

      
      // Use rejectWithValue to return the error object
      return thunkApi.rejectWithValue(errobj);
    }
  }
);

export const UpdateTribute = createAsyncThunk<
  FetchTributeResponse,
  CreateTributeAttribute
>(
  "opti2.0/registerUser", // Fixed the action type name to be more accurate
  async (param, thunkApi) => {
    try {
      			      const { id } = param;

      const result = await axios.patch(
        `/api/auth/update/${encodeURIComponent(id)}`,
        param,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      
      let res_data = result.data.data as FetchTributeResponse;
      
      // This is the key fix - you need to return the data for fulfilled case
      return res_data;
      
    } catch (err: any) {
      
      let errobj = {
        errorCode: "",
        errorMsg: "",
      };

      // Check if it's an axios error with response
      if (err.response && err.response.data) {
        const errorData = err.response.data;
        
        // Handle the new error format: { "status": "Failed", "errors": { ... } }
        if (
          typeof errorData === "object" &&
          errorData !== null &&
          errorData.status === "Failed" &&
          errorData.errors
        ) {
          // Extract error messages from the errors object
          const errors = errorData.errors;
          const errorMessages = Object.values(errors) as string[];
          
          errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
          errobj.errorMsg = errorMessages.length > 0 
            ? errorMessages.join(", ") 
            : "Validation error occurred";
        } 
        // Handle the old error format: { "responseCode": "...", "responseMessage": "..." }
        else if (
          typeof errorData === "object" &&
          errorData !== null &&
          "responseCode" in errorData
        ) {
          const typedError = errorData as {
            responseCode: string;
            responseMessage: string;
          };
          errobj.errorCode = typedError.responseCode;
          errobj.errorMsg = typedError.responseMessage;
        } 
        // Handle generic error format
        else {
          errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
          errobj.errorMsg = errorData.message || "Failed to send reset email";
        }
      } else {
        errobj.errorCode = ERROR_CODE_TYPES["GENERAL_ERROR"];
        errobj.errorMsg = err.message || "Network error occurred";
      }

      
      // Use rejectWithValue to return the error object
      return thunkApi.rejectWithValue(errobj);
    }
  }
);