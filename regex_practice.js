const regexes = {
  //
  canadianPostalCode: /(^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$)/, //FULLY DONE
  visa: /^(4[0-9]{15}|(4[0-9]{12}))$/, //FULLY DONE
  masterCard: /^((5[1-5]\d{14})|(2[2-6][0-9]{2}\d{12}|27[0-2]\d\d{12}))$/, //FULLY DONE
  adaFloat:
    /(^([0-9](_?[0-9])*)(\.([0-9](_?[0-9])*))?((E|e)(\+|-)?([0-9](_?[0-9])*))?$)|(^([0-9](_?[0-9])*)#([0-9A-Fa-f](_?[0-9A-Fa-f])*)(\.([0-9A-Fa-f](_?[0-9A-Fa-f])*))?#((E|e)(\+|-)?([0-9](_?[0-9])*))?$)/, //FULLY DONE
  notThreeEndingInOO: /(()|^([a-zA-Z]+))/,
  divisibleBy32: /^(0+|((0|1)*00000))$/, //FULLY DONE
  sevenThroughThirtyOne: /^([7-9]|[12]\d|3[0-1])$/, //FULLY DONE
  mLComment: /^([(])\*[^a-zA-Z]*\*([)])$/, //FULLY DONE
  notFileForFirstNoLookAround: /\w?[^(file)|(for)|(first)]/,
  notFileForFirstWithLookAround: /^((?!(^file$|^for$|^first$)).)*$/, //FULLY DONE
  cOctal: /^0[0-7]*$/, //FULLY DONE
  restrictedFloatingPoint: /^-?[0-9]+\.?[0-9]*((E|e)(-|\+)?[0-9]{1,3})?$/, //FULLY DONE
  palindrome2358:
    /(^(.).?\2$)|(^(.|.+)(.|.+).\5\4$)|(^(.|.+)(.|.+)(.|.+)(.|.+)\10\9\8\7$)/, //FULLY DONE
  noNegativeIntLits: /(?<![-\d])(\d+)/, //FULLY DONE
  repeated: /^([a-z]*)\1$/, //FULLY DONE
};

export function matches(name, string) {
  return regexes[name].test(string);
}
