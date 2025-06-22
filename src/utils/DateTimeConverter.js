export const DateTimeToDateString = (datetime) =>{
    const date = new Date(datetime);
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
}



export const DateTimeToDateTimeString = (datetime) =>{
    const date = new Date(datetime);
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${date.toLocaleString()}`
}