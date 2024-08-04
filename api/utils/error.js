export const errorHandler = (statusCode, meassage) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = meassage;
    return error
}