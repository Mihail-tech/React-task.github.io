

export const required = value => {
    if(value) {
        return undefined
    } else {
        return 'error message, field is required'
    }

}

export const maxLengthCreator = (maxLength) => (value) => { 
    if(value && value.length > maxLength) return `max length is ${maxLength} symbols`;

    return undefined;
}

