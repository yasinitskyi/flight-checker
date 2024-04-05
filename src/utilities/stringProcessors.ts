const replaceNonNumeric = (value: string) => value.replace(/[^\d]/g, '')

const replaceNonAlphabetic = (value: string) => value.replace(/^[\u4E00-\u9FFFa-zA-Z]+$/gi, '');

const replaceNonAlphanumeric = (value: string) => value.replace(/[^A-Za-z0-9]/g, '');

const processECJK = (value: string) => value.replace(/(^\s+|[^\s\u4E00-\u9FFF\u3400-\u4DBF\u3000-\u303F\u3105-\u3129\u02CA\u02C7\u02CB\u02D9a-zA-Z'])/g, '');

const replaceSpaceCharacters = (value: string) => value.replace(/\s+$/g, '');

export {
    processECJK,
    replaceNonNumeric,
    replaceNonAlphabetic,
    replaceSpaceCharacters,
    replaceNonAlphanumeric,
}