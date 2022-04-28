const regexes = {
    canadianPostalCode: /(^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9])/,
    visa: /(4[0-9]{15}|(4[0-9]{12}))/,
    masterCard: /(5[1-5]\d{14})|(2[2-6][0-9]{2}\d{12}|27[0-2]\d\d{12})/,
    adaFloat: /()/,
    notThreeEndingInOO: /w+[^(oo | OO)$]/,
    divisibleBy32: /^(0+|((0|1)*00000))$/,
    sevenThroughThirtyOne: /[7-9]|[12]\d|3[0-1]/,
    mLComment: /()/,
    notFileForFirstNoLookAround: /()/,
    notFileForFirstWithLookAround: /^((?!(^file$|^for$|^first$)).)*$/,
    cOctal: /^0+[0-7]*$/,
    restrictedFloatingPoint: /()/,
    palindrome2358: /()/,
    noNegativeIntLits: /()/,
    repeated: /()/,
  }

export function matches(name, string) {
  return regexes[name].test(string)
}