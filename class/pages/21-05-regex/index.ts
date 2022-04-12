// /apple/.test("apple")
// true
// /\w/.test(1)
// true
// /\w/.test("apple")
// true
// /\w/.test("appleasd")
// true
// /^\w+@a.com$/.test("adcdef@a.com")
// true
// /^\w?@a.com/.test("adcdef@a.com")
// false
// // 없거나 한개일때
// undefined
// // 없거나 한개거나 그 이상이거나 
// /^\w*@a.com/.test("adcdef@a.com")
// true
// /^$/.test("010-1234-5678")
// false
// /^\d+-1234-5678$/.test("010-1234-5678")
// true
// /^\d{3}-\d{3,4}-\d{4}$/.test("010-1234-5678")
// true