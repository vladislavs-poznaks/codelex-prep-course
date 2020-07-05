export {};

function onlyTheAces(arr) {
    
    var aces = [];
    
    //Kā var izveidot masīva ciklu? (līdzīgi kā Java caur :)
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "Ace") {
            aces.push(arr[i]);
        }
    }

    return aces;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
