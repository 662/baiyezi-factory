class ApiError extends Error {
    constructor(message, url) {
        super(message);
        this.message = message;
        this.name = 'ApiError';
        this.url = url;

        this.constructor = ApiError;
        this.__proto__ = ApiError.prototype;
    }
}
class ApiTimeoutError extends ApiError {
    constructor(time, url) {
        super('请求超时', url);
        this.name = 'ApiTimeoutError';
        this.time = time;

        this.constructor = ApiTimeoutError;
        this.__proto__ = ApiTimeoutError.prototype;
    }
}
class ApiServerError extends ApiError {
    constructor(message, url) {
        super(message, url);
        this.name = 'ApiServerError';
        this.constructor = ApiServerError;
        this.__proto__ = ApiServerError.prototype;
    }
}

class ApiAuthError extends ApiError {
    constructor(url) {
        super('登录已过期', url);
        this.name = 'ApiAuthError';
        this.constructor = ApiAuthError;
        this.__proto__ = ApiAuthError.prototype;
    }
}

class ApiJsonError extends ApiError {
    constructor(url) {
        super(`响应格式错误,无法转换为JSON`, url);
        this.name = 'ApiJsonError';
        this.constructor = ApiJsonError;
        this.__proto__ = ApiJsonError.prototype;
    }
}

class ApiBusinessError extends ApiError {
    constructor(message, url, status, response) {
        super(message, url);
        this.name = 'ApiBusinessError';
        this.status = status;
        this.response = response;
        if (response.detail) this.detail = response.detail;
        this.constructor = ApiBusinessError;
        this.__proto__ = ApiBusinessError.prototype;
    }
}

export { ApiError, ApiAuthError, ApiBusinessError, ApiJsonError, ApiServerError, ApiTimeoutError };
