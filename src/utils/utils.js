const dateFormatter = function(_date) {
    let date = new Date(_date)
    let y = date.getFullYear()
    let m = (date.getMonth() + 1).toString().padStart(2, '0')
    let d = date
        .getDate()
        .toString()
        .padStart(2, '0')

    let h = date
        .getHours()
        .toString()
        .padStart(2, '0')
    let M = date
        .getMinutes()
        .toString()
        .padStart(2, '0')
    let s = date
        .getSeconds()
        .toString()
        .padStart(2, '0')

    return `${y}-${m}-${d} ${h}:${M}:${s}`
}

const backDate = function(_date, diff) {
    let date = new Date(_date)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()

    let h = date
        .getHours()
        .toString()
        .padStart(2, '0')
    let M = date
        .getMinutes()
        .toString()
        .padStart(2, '0')
    let s = date
        .getSeconds()
        .toString()
        .padStart(2, '0')

    return `${diffDate(new Date(y, m, d), diff)} ${h}:${M}:${s}`
}

function diffDate(_date, diff) {
    let date = new Date(_date)
    let y = date.getFullYear()
    let m = date.getMonth() 
    let d = date.getDate()

    if (d > diff) {
        d -= diff
        m = m.toString().padStart(2, '0')
        d = d.toString().padStart(2, '0')
        return `${y}-${m}-${d}`
    } else {
        if (m > 1) m--
        else {
            y--
            m = 12
        }
        diff -= d
        d = new Date(y, m, 0).getDate()
        if (diff == 0) {
            m = m.toString().padStart(2, '0')
            d = d.toString().padStart(2, '0')
            return `${y}-${m}-${d}`
        } else {
            return diffDate(new Date(y, m, d), diff)
        }
    }
}

export default {
    dateFormatter,
    backDate,
}
