import { COOKIE_KEY } from "../constants"
import Cookies from 'js-cookie'

export const getCookie = (key: string) => {
    const _cookie = Cookies.get(COOKIE_KEY)
    console.log('_cookie', _cookie)
    if (_cookie) {
        const _cookieObj = JSON.parse(_cookie)
        return _cookieObj[key]
    }
}

export const setCookie = ({ key, value }: { key: string, value: string }) => {
    const _cookie = Cookies.get(COOKIE_KEY)
    if (_cookie) {
        const _cookieObj = JSON.parse(_cookie);
        const _cookieStr = JSON.stringify({..._cookieObj, [key]:value });
        Cookies.set(COOKIE_KEY, _cookieStr)
    }
}