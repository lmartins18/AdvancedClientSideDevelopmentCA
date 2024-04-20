export const getUserCountry: () => Promise<string | undefined> = async () => {
    const url = "http://ip-api.com/json";  
    const country: string | undefined = await fetch(url).then(resp => resp.json()).then(resp => resp.country).catch(() => undefined);;
    return country;
};
// REf: https://stackoverflow.com/questions/3489460/how-to-get-visitors-location-i-e-country-using-geolocation