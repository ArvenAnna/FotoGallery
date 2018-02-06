const videoFormats = ['mp4', 'mov'];

export const isVideo = (src) => {
    return videoFormats.includes(getFormat(src));
}

function getFormat(src) {
    let format = '';
    if (src) {
        const split = src.split('?');
        const splitArray = split[0].split('/');
        format = splitArray[splitArray.length - 1].split('.');
        format = format[format.length - 1];
    }
    return format.toLowerCase();
}