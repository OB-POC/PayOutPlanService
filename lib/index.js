// Calculate simple interest on monthly basis
let getSimpleInterest = (principal, rate) => {
    return (principal * rate * months) / (1200);
}

// Calculate compound interest on monthly basis
let getCompundInterest = (principal, rate) => {
    return principal * (Math.pow((1 + rate / 1200), 12) - 1)
}
