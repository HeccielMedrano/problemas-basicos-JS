// Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce
// meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el
// total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de
// cada mes de todos los representantes. Imprimir toda la información

// Una empresa guarda las ventas realizadas por sus tres representantes a lo largo de doce meses de sus cuatro productos, VENTAS( representante, mes, producto ). Queremos proyectar el total de ventas, TOTAL ( mes, producto ), para lo cual sumamos las ventas de cada producto de cada mes de todos los representantes. Imprimir toda la información

let sales = [
    {representative: "R1", month: 1, product: "1", amount: 10},
    {representative: "R1", month: 12, product: "2", amount: 130},
    {representative: "R1", month: 4, product: "1", amount: 110},
    {representative: "R1", month: 1, product: "4", amount: 113},
    {representative: "R1", month: 8, product: "2", amount: 77},
    {representative: "R2", month: 2, product: "1", amount: 150},
    {representative: "R3", month: 12, product: "4", amount: 80},
    {representative: "R3", month: 1, product: "4", amount: 66},
  ];
  

let totalSales = {};

sales.forEach((sale) => {
    let { month, product, amount } = sale;

    if (!totalSales[month]) {
        totalSales[month] = {};
    }
    if (!totalSales[month][product]) {
        totalSales[month][product] = 0;
    }

    totalSales[month][product] += amount;
});

console.log("Total de ventas por mes y producto:");
for (let month in totalSales) {
    for (let product in totalSales[month]) {
        console.log("Mes: " + month + ". Producto " + product + ": " + totalSales[month][product]);
    }
}