let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Factory/FromFactory/EntryReturn/QrCode/${jVarLocalFilterString}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };