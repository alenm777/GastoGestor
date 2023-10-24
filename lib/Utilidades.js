export const currencyFormatter = (amount) => {
   const formatter = Intl.NumberFormat("es-US", {
        currency: "USD",
        style: "currency"
    })

    return formatter.format(amount);
};