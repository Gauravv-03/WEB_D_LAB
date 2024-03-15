function valid() {
    let a = document.querySelector("#card").value;
    let b = document.querySelector("#prefix").value;
    let c = document.querySelector("#length").value;

    if (a == "Master Card") {
        if ((b >= 51 && b <= 55) && c == 16) return true;
        else {
            alert('please check Master card field carefully');
            return false;
        }
    }
    if (a == "Visa") {
        if (b == 4 && (c == 13 || c == 16)) return true;
        else {
            alert('please check Visa carefully');
            return false;
        }
    }
    if (a == "American Express") {
        if ((b == 34 || b == 37) && (c == 15)) return true;
        else {
            alert('please check American Express carefully');
            return false;
        }
        return false;
    }
}