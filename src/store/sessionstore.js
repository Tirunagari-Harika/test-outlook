import { isEmptyObject } from "../utilities/utilities";

const sessionstore = {
    sessionStore: {},

    get: function (key) {
        if (!sessionstore) {
            return this.sessionStore[key];
        }

        return sessionStorage.getItem(key);
    },

    set: function (key, val) {
        if (!sessionStorage) {
            this.sessionStore[key] = val;
        } else {
            sessionStorage.setItem(key, val);
        }
    },

    delKey: function (key) {
        if (!sessionStorage && !isEmptyObject(this.sessionStore)) {
            delete this.sessionStore[key];
            return;
        }

        if (!isEmptyObject(sessionStorage)) {
            sessionStorage.removeItem(key);
        }
    },

    clear: function () {
        this.sessionStore = {};
        sessionStorage.clear();
    }
}

export { sessionstore };