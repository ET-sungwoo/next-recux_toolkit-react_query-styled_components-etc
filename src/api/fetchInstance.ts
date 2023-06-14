export const getFetcher = async (url: string) => {
    try {
        const response = await fetch(url, { credentials: 'include' });
        if (!response.ok) return;
        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.error(error);
    }
};

interface Body {
    [Key: string]: string | string[] | null;
}

export const postFetchOptions = (body: Body): RequestInit => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(body),
    };
};

export const deleteFetchOptions = (): RequestInit => {
    return {
        method: 'DELETE',
        credentials: 'include',
    };
};

export const patchFetchOptions = (body: Body): RequestInit => {
    return {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(body),
    };
};
