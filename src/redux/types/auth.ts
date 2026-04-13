export type ErrorResponse = {
  errorMsg: string;
  errorCode: string;
};
export type LogUserInAttributes = {
  Username?: string;
  Password?: string;
};


export interface LogUserInResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
  user: User
}

export interface User {
  fullName: any
  email: string
  phone: any
  nin: any
  isVerified: boolean
  phoneNumberVerified: boolean
  country: string
  address: any
  status: string
  userAgent: string
  createdAt: string
  updatedAt: string
  lastLogin: string
  deviceType: string
}

export type RegisterInResponse = {
userAgent: string
  email: string
  fullName: any
  phone: any
  nin: any
  isVerified: boolean
  phoneNumberVerified: boolean
  country: string
  address: any
  lastLogin: any
  status: string
  createdAt: string
  updatedAt: string
  requestId: string
};

export type RegisterInAttribute = {
   email?: string;
  password?: string;
	deviceType?: string;

};
export type ValidateOtpAttribute = {
  otp?: string;
  requestId?: string;
};

export type ValidateOtpResponse = {
  AccessToken: string;
	DisplayName: string;
	RefreshToken: string;
	Department:string;

  // RefreshToken: {
  //   tokenString: string;
  //   expireAt: string;
  // };
};

export type ResendOtpAttributes = {
  email?: string;
  requestId?: string;
};

export type ResendOtpInResponse = {
  AccessToken: string;
	DisplayName: string;
	RefreshToken: string;
	Department:string;

  // RefreshToken: {
  //   tokenString: string;
  //   expireAt: string;
  // };
};



export interface OnboardUserAttribute {
	token:string;
  fullName: string
  phone: string
  nin: string
  address: string
}


export interface CreateTributeAttribute {
  id?: string
  fullName?: string
  tribute?: string
  images?: Image[]
  dateModified?: string
  dateCreated?: string
}

export interface Image {
  imageName?: string
  filePath?: string
  fileExt?: string
  file?: string
}
export interface FetchTributeResponse {
  id?: string
  fullName?: string
  tribute?: string
  images?: Image[]
  dateModified?: string
  dateCreated?: string
}

export interface Image {
  imageName?: string
  filePath?: string
  fileExt?: string
  file?: string
}

