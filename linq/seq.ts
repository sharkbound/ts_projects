class Seq<T> implements Iterator<T> {
    private seq: Iterator<T>;
    private filter_func: (T) => boolean;

    constructor(seq: Iterator<T> | Iterable<T>, filter_func?: (T) => boolean) {
        this.seq = seq[Symbol.iterator]()
        this.filter_func = filter_func;
    }

    next(...args: [] | [undefined]): IteratorResult<T, any> {
        let next = this.seq.next(...args);
        if (next.done) {
            return next
        }
        while (!next.done) {
            if ((this.filter_func === undefined || this.filter_func === null) || this.filter_func(next.value)) {
                return next;
            }
            next = this.seq.next()
        }
        return {done: true, value: null}
    }

    return(value?: any): IteratorResult<T, any> {
        return this.seq.return(value)
    }

    throw(e?: any): IteratorResult<T, any> {
        return this.seq.throw(e)
    }

    [Symbol.iterator]() {
        return this;
    }

    toArray(): T[] {
        let arr = []
        for (let val of this) {
            arr.push(val)
        }
        return arr
    }

    filter(func: (T) => boolean): Seq<T> {
        return new Seq(this, func)
    }


    private* _map_helper<V>(transformer: (T) => V): Iterator<V> {
        for (let value of this) {
            let val = transformer(value)
            if (val !== undefined && val !== null) {
                yield val
            }
        }
    }

    map<V>(transformer: (T) => V): Seq<V> {
        return new Seq(this._map_helper(transformer))
    }
}

// console.log(
//     new Seq([1, 2, 3, 4])
//         .filter(a => a == 3)
//         .map(v => v.toString())
//         .toArray()
// )