export function parseToCurrency(number: any, decPlaces: any, prefix?: string) {
    let decSep = ',';
    let thouSep = '.';
    let j = 0;

    number = number.replace(/([.R$])+/g, '').replace(/([,])+/g, '.');

    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces, decSep = typeof decSep === "undefined" ? "," : decSep;
    thouSep = typeof thouSep === "undefined" ? "." : thouSep;
    let sign = number < 0 ? "-" : "";
    let i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    j = i.length > 3 ? (j % 3) : 0;

    return (prefix || "R$ ") + sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - Number(i)).toFixed(decPlaces).slice(2) : "");
}