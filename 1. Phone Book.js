function phoneBook(input) {
    let objPhone = {};
    
    for (let line of input) {
        let [name, number] = line.split(` `);
        objPhone[name] = number;
    }
for (let name in objPhone){
    console.log(`${name} -> ${objPhone[name]}`);
    
}
    console.log();
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
