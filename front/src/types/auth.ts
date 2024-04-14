export interface UserProfile {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    photoUrl?: string;
    profile: { is_email_confirmed: boolean };
}

export interface RegisterData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    profile: {
        address: string;
        phone_number: string;
    };
    repeatPassword: string;
}
