export const apiFetch = async (url: string, options: RequestInit = {}) => {
    let accessToken = localStorage.getItem("accessToken") || "";

    const makeRequest = () =>
        fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
                Authorization: `Bearer ${accessToken}`,
            },
        });

    let res = await makeRequest();

    return res;
};