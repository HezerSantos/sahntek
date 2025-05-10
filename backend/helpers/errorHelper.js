exports.throwError = (message, status, json) => {
    const error = new Error(message)
    error.status = status
    error.json = json
    throw error
}
