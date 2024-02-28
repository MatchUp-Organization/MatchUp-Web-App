import useAuth from "./useAuth"

export default function useRefreshToken() {
    const { setAuth } = useAuth();
    let jsonResponse = {};

    const refresh = async () => {
        /* const response = await fetch('http://localhost:3001/refresh', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        uncomment this line when refresh is implemented
        jsonResponse = await response.json();
        */
        setAuth(prev => {
            return {
                ...prev,
                accessToken: jsonResponse.token,
            };
        });
        return jsonResponse.token;
    };
    return refresh;
};