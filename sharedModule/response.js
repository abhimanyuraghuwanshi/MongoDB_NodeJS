function response(statuscode = 404, successBool = false,  message = "Oops, there was a hiccup.", dataValue = null) {
    return {
        success: successBool,
        status: statuscode,
        msg: message,
        data: dataValue
    }
}

export default response;