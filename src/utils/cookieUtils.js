import cookie from 'js-cookie';

export function SetCookie(
  name,
  value,
  {
    expires, secure, path = '/', domain = '',
  } = {},
) {
  cookie.set(name, value, {
    expires,
    path,
    domain,
    secure,
  });
}

export function GetCookie(name) {
  return cookie.get(name);
}

export function RemoveCookie(name) {
  return cookie.remove(name);
}

export function GetCookieJSON(name) {
  return cookie.getJSON(name);
}

// export default {
//   SetCookie,
//   GetCookie,
//   RemoveCookie,
//   GetCookieJSON,
// };
