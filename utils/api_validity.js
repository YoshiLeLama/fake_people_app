const countValidator = (count) => (typeof(count) === 'string') ? Number.parseInt(count) : ((typeof(count) === "number") ? Math.round(count) : 1);

module.exports = {
    countValidator
}