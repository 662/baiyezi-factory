import { message } from 'antd';

let lastErrorMessage;

function info(content, duration = 3, onClose) {
    message.info(content, duration, onClose);
}
function loading(content, duration = 3, onClose) {
    message.loading(content, duration, onClose);
}
function error(content, duration = 5, onClose) {
    if (message !== lastErrorMessage) {
        lastErrorMessage = message;
    } else {
        message.destroy();
    }
    message.error(content, duration, onClose);
}
function success(content, duration = 3, onClose) {
    message.success(content, duration, onClose);
}
function warning(content, duration = 3, onClose) {
    message.warning(content, duration, onClose);
}
function destroy() {
    message.destroy();
}

export { info, loading, error, success, warning, destroy };
