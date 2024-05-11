document.addEventListener("DOMContentLoaded", () => {
  const inp = document.querySelector("#inp");
  const display = document.querySelector("#display");
  let jelszo;

  inp.addEventListener("input", () => {
    console.log(inp.value.length);
    jelszo = inp.value;
    if (jelszo.length >= 13) {
      display.innerHTML = "Too long!";
      display.style.color = "red";
      return;
    }
    calcStrength(getStrength(jelszo));
  });

  const printBad = (bad) => {
    display.innerHTML = bad;
    display.style.color = "red";
  };

  const printWeak = (weak) => {
    display.innerHTML = weak;
    display.style.color = "orange";
  };

  const printMedium = (medium) => {
    display.innerHTML = medium;
    display.style.color = "yellow";
  };

  const printGreat = (great) => {
    display.innerHTML = great;
    display.style.color = "green";
  };

  const calcStrength = (stengObj) => {
    const weak = "Instantly";

    switch (stengObj.type) {
      case "lowerCaseOnly":
        switch (stengObj.length) {
          case 9:
            printWeak("2min");
            break;
          case 10:
            printMedium("1hrs");
            break;
          case 11:
            printMedium("1day");
            break;
          case 12:
            printMedium("3week");
            break;
          default:
            printBad(weak);
            break;
        }
        break;
      case "oneUpperCase":
        switch (stengObj.length) {
          case 8:
            printWeak("22min");
            break;
          case 9:
            printMedium("19hrs");
            break;
          case 10:
            printMedium("1month");
            break;
          case 11:
            printGreat("5yrs");
            break;
          case 12:
            printGreat("300yrs");
            break;
          default:
            printBad(weak);
            break;
        }
        break;
      case "oneUpperCasePlusOneNumber":
        switch (stengObj.length) {
          case 7:
            printWeak("1min");
            break;
          case 8:
            printWeak("1hrs");
            break;
          case 9:
            printMedium("3days");
            break;
          case 10:
            printMedium("7mths");
            break;
          case 11:
            printGreat("41yr");
            break;
          case 12:
            printGreat("2000yrs");
            break;
          default:
            printBad(weak);
            break;
        }
        break;
      case "oneUpperCasePlusOneNumberPlusOneSpecialChar":
        switch (stengObj.length) {
          case 7:
            printWeak("6min");
            break;
          case 8:
            printMedium("8hrs");
            break;
          case 9:
            printMedium("3wks");
            break;
          case 10:
            printGreat("5yrs");
            break;
          case 11:
            printGreat("400yrs");
            break;
          case 12:
            printGreat("34000yrs");
            break;
          default:
            printBad(weak);
            break;
        }
        break;
    }
  };
  /*
    input {
        type: string
        length: number
    }
    output 
        type: string
   * */

  /*
    {
        type: lowerCaseOnly | oneUpperCase | oneUpperCasePlusOneNumber | oneUpperCasePlusOneNumberPlusOneSpecialChar
        length: number
    }
  */
  const getStrength = (jelszo) => {
    let strength = {
      type: "",
      length: 0,
    };

    if (
      csakKisbetu(jelszo) == false &&
      tartalmazSzamot(jelszo) &&
      containsSpecChar(jelszo)
    ) {
      strength.type = "oneUpperCasePlusOneNumberPlusOneSpecialChar";
      strength.length = jelszo.length;
      return strength;
    } else if (csakKisbetu(jelszo) == false && tartalmazSzamot(jelszo)) {
      strength.type = "oneUpperCasePlusOneNumber";
      strength.length = jelszo.length;
      return strength;
    } else if (csakKisbetu(jelszo) == false) {
      strength.type = "oneUpperCase";
      strength.length = jelszo.length;
      return strength;
    } else {
      strength.type = "lowerCaseOnly";
      strength.length = jelszo.length;
      return strength;
    }
  };

  let csakKisbetu = (s) => {
    let i = 0;
    while (
      i < s.length &&
      s[i] == s[i].toLowerCase() &&
      s[i] != s[i].toUpperCase()
    )
      i++;
    if (i < s.length) {
      return false;
    } else {
      return true;
    }
  };

  let tartalmazSzamot = (s) => {
    let i = 0;
    while (i < s.length && isNaN(s[i])) {
      i++;
    }
    if (i < s.length) {
      return true;
    } else {
      return false;
    }
  };

  let containsSpecChar = (str) => {
    let specialChars = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|";
    let i = 0;
    while (i < str.length && specialChars.indexOf(str[i]) == -1) {
      i++;
    }
    if (i < str.length) {
      return true;
    } else {
      return false;
    }
  };
});
