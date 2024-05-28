export async function doFetch(url, options = {}) {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        const combinedOptions = { headers, ...options };
        const response = await fetch(url, combinedOptions);
        console.log(response);

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(JSON.stringify(errorResponse));
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    } finally {
        //
    }
}
