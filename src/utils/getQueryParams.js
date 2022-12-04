const queryParams = () => {
    const paramsObj = new URLSearchParams(window.location.search);
    let newObj = {};
    for (const [key, value] of paramsObj) {
        newObj[key] = value;
    }
    console.log("here in query");
    return newObj;
};

export default queryParams;
