export const getDate = (date) => {
    const newdate = new Date(date)
    const yyyy = newdate.getFullYear()
    const mm = newdate.getMonth() + 1
    const dd = newdate.getDate()
    const hour = ('0' + newdate.getHours()).slice(-2)
    const minutes = ('0' + newdate.getMinutes()).slice(-2)

    return `${yyyy}-${mm}-${dd} ${hour}:${minutes}`
}