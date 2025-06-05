exports.throwError = (message, status, json) => {
    const error = new Error(message)
    error.status = status
    error.json = json //Make this as a list [msg: "404"]
    throw error
}
