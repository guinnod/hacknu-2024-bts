import { jwtDecode } from "jwt-decode";
import jwtService from ".";

interface DecodedJwt {
    exp: number;
}

const decode = () => {
    try {
        const token = jwtService.getRefreshToken();
        const decodedJwt = jwtDecode<DecodedJwt>(token);
        return decodedJwt;
    } catch (error) {
        return null;
    }
};

export const isJwtExpired = () => {
    const decodedJwt = decode();
    if (!decodedJwt) {
        return true;
    }
    const currentTime = Date.now() / 1000;
    return decodedJwt.exp < currentTime;
};
