function cloner(object) {
    if (object) {
        let functions = [];
        for (const key in object){
            if (typeof object[key] === 'function') {
                const functionClone = object[key].bind({});
                functions.push({functionClone, key})
            }
        }
        const cloneObject = JSON.parse(JSON.stringify(object));
        for (const func of functions) {
            cloneObject[func.key] = func.functionClone;
        }
        console.log(cloneObject);
        return cloneObject
    }
    throw new Error('???????');
}
const clone = cloner({id:1, name: 'kokos', greeting() {console.log('hi')}, foo() {console.log('hello')}});
clone.greeting();
clone.foo();
