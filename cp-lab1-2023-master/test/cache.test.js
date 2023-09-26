import {Cache} from "../src/cache";

describe('Cache', () => {

    let cache;

    beforeEach(() => {
        cache = new Cache();
    });

    afterEach(() => {
        cache = null;
    });
    // set_cache
    test('it return null if empty', () => {
        cache.set_cache('cup', 1000);
        expect(cache.get_cache('cup')).toEqual({"accesses": 0, "value":1000});
        expect(cache.get_cache('cup')).toEqual(null);
    });

    // set_cache (__, __, 3)
    test('it should return nullputr if you try to make 3 appeal', () => {
        cache.set_cache('cup of coffe', 6, 3);
        expect(cache.get_cache('cup of coffe')).toEqual({"accesses": 2, "value":6});
        expect(cache.get_cache('cup of coffe')).toEqual({"accesses": 1, "value":6});
        expect(cache.get_cache('cup of coffe')).toEqual({"accesses": 0, "value":6});
        expect(cache.get_cache('cup of coffe')).toEqual(null);
    })
    //get_cache
    test('the get_cache method returns nullptr if the key does not exist', () => {
        expect(cache.get_cache('keywithoutnumber')).toBeNull();
    })

    // stat_cache
    test('stat_cache method should return empty', () => {
        expect(cache.stat_cache()).toHaveLength(0);
    })

})
