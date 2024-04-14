export interface LoginDTO {
    username: string;
    password: string;
}
export interface RegisterDTO {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    profile: {
        address: string;
        phone_number: string;
    };
}

export interface UserProfileDTO {
    is_email_confirmed: boolean;
    email: string;
    first_name: string;
    last_name: string;
    username: string;
}
export interface JwtDTO {
    access: string;
    refresh: string;
}
export interface UploadPhotoDTO {
    pcImage: File;
    tabletImage?: File;
    mobileImage?: File;
    previewImage?: File;
}
