function phoneNumber(input) {

    let pattern = /\+359([ , -])2\1[0-9]{3}\1[0-9]{4}\b/g;
    // let result = input.match(pattern);
    let match = input.match(pattern);
    console.log(match.join(", "));
    // let result = [];
    // let match = pattern.exec(input);
    // while (match !== null) {
    //     result.push(match[0]);
    //     match = pattern.exec(input);
    // }
    // console.log(result.join(", "));
}
phoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");