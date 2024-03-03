const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Hannah', 'Ian', 'Julia'];

function getRandomName () {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function nameGenerator() {
    return {
        currentName: 'Get a new name',

        newName (){
            this.currentName = getRandomName();
        }
    };
}