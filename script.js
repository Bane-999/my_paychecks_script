rows = document.querySelectorAll(`table.simple-table > tbody tr`)

values = Array.from(rows).map((x) => {
    return parseInt((x.querySelector(`td:nth-child(5)`).innerText).replace(',' , ''));
})

sum = values.reduce((x, y) => {
    return x + y
})

result = new Intl.NumberFormat('en').format(sum)
document.querySelector(`table.simple-table > tfoot tr:nth-child(2) td:nth-child(2)`).innerText = result;
