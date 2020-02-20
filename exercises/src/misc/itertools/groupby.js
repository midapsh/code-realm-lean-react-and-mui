
export default function groupBy(xs, key) {
    let aux = xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
    if (undefined in aux) {
        return { "ALL": values(aux) };
    } else {
        return aux;
    }
};