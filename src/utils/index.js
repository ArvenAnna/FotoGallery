export const isVideo = (src) => {
    return getFormat(src) == 'mp4';
}

function getFormat(src) {
    let format = '';
    if (src) {
        const split = src.split('?');
        const splitArray = split[0].split('/');
        format = splitArray[splitArray.length - 1].split('.');
        format = format[format.length - 1];
    }
    return format;
}