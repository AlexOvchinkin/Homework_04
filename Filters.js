
export function inArray(article, array) {
    return array.includes(article.id);
}

export function inRange(date, range) {

    let vDate = new Date(date);

    if (!range.from){
        return true;
    }

    if (!range.to && vDate >= range.from){
        return true;
    }

    if (vDate >= range.from && vDate <= range.to){
        return true;
    }

    return false;

}

export function inSelected() {
    return true;
}


