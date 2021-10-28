
/**
 * 
 * @param {Response<any, Record<string, any>, number>} res 
 */
const setJSONContentType = (res) => {
    res.setHeader('Content-Type', 'Application/JSON');
}

module.exports = {
    setJSONContentType
}