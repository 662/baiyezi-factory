const USER_INFO = 'baiyezi_user';
const STORAGE = localStorage;

const setSession = session => {
    STORAGE.setItem(USER_INFO, JSON.stringify(session));
};
const getSession = () => {
    return JSON.parse(STORAGE.getItem(USER_INFO) || '{}');
};
const updateSession = session => {
    const oldSession = getSession();
    STORAGE.setItem(USER_INFO, JSON.stringify({ ...oldSession, ...session }));
};
const removeSession = () => {
    STORAGE.removeItem(USER_INFO);
};
const getToken = () => {
    const session = getSession();
    if (session) return session.token;
    else return '';
};
const isAuthenticated = () => {
    return !!getSession().token;
};

export { setSession, getSession, getToken, removeSession, isAuthenticated, updateSession };
