function pieceOfPie(arr, firstFlavor, secondFlavor) {
    let firstIndex = arr.indexOf(firstFlavor);
    let secondIndex = arr.indexOf(secondFlavor);
    let output = arr.slice(firstIndex, secondIndex + 1);
    return output;
    // console.log(output);
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');