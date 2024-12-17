function order() {
    let numb = +prompt('nechta buyurtma bermoqchisiz?')

    let qabul = confirm(`${numb} ta Qiyqiriq set ${numb*45000} som   \n\n Buyurtmani qabul qilasizmi?`)


    if (qabul == true) {
        alert('Zakaz qabul qilindi')
    } else {
        alert('Zakaz otmen')
    }
}