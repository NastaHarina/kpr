class Cache{
    constructor() {
        this.multimap = new Map();
        this.history = [];
    }
    set_cache(key, value, accesses = 1) {
        this.multimap.set(key, { value, accesses });
    }

    get_cache(key) {
        if (!this.multimap.has(key)) {
            return null;
        }

        const person = this.multimap.get(key);
        person.accesses--;

        this.history.push('Key: ${ key } = { value = ${ entry.value }, accesses = ${ entry.accesses }}');

        if (person.accesses === 0) {
            this.multimap.delete(key);
        }
        return { value: person.value, accesses: person.accesses };
    }

    stat_cache() {
        for (const i of this.history) {
            console.log(i);
        }
        return this.history;
    }
    

}
export { Cache };





