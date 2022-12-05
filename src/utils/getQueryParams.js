const queryParams = () => {
    const paramsObj = new URLSearchParams(window.location.search);
    let newObj = {};
    for (const [key, value] of paramsObj) {
        newObj[key] = value;
    }
    return newObj;
};

export default queryParams;
