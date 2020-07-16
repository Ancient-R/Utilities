
// Para consultas de api
export const getDataApi =  async url => {
    const result = fetch(url);
    const resp = await result.json();

    return resp;
}