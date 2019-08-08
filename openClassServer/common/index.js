const handleParam = (params={}) => {
    const {error = '',status=200,data={}} = params;
    return {
        error,status,data,
    }
}
module.exports = handleParam;