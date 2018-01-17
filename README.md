# viperjs

常用js片段组成的工具库,代码是es6编写，可以拿出单条片段进行babel再使用。

### 获取
```bash
# npm 
npm install viperjs

```

## 目录

### ARRAY

<details>
<summary>点击查看</summary>

* [`ArrayConcat`](#ArrayConcat)
* [`difference`](#difference)
* [`includes`](#includes)
* [`intersection`](#intersection)
* [`remove`](#remove)
* [`sample`](#sample)
* [`sampleSize`](#sampleSize)
* [`chunk`](#chunk)
* [`compact`](#compact)
* [`countOccurrences`](#countOccurrences)
* [`deepFlatten`](#deepFlatten)
* [`flatten`](#flatten)
* [`forEachRight`](#forEachRight)
* [`distinctValuesOfArray`](#distinctValuesOfArray)
* [`dropRight`](#dropRight)
* [`everyNth`](#everyNth)
* [`filterNonUnique`](#filterNonUnique)
* [`indexOfAll`](#indexOfAll)
* [`initial`](#initial)
* [`initializeArrayWithRange`](#initializeArrayWithRange)
* [`initializeArrayWithValues`](#initializeArrayWithValues)
* [`isSorted`](#isSorted)
* [`join`](#join)
* [`last`](#last)
* [`longestItem`](#longestItem)
* [`maxN`](#maxN)
* [`minN`](#minN)
* [`nthElement`](#nthElement)
* [`partition`](#partition)
* [`pull`](#pull)
* [`pullAtIndex`](#pullAtIndex)
* [`pullAtValue`](#pullAtValue)
* [`reducedFilter`](#reducedFilter)
* [`shuffle`](#shuffle)
* [`similarity`](#similarity)
* [`symmetricDifference`](#symmetricDifference)
* [`tail`](#tail)
* [`take`](#take)
* [`takeRight`](#takeRight)
* [`union`](#union)
* [`without`](#without)
* [`zip`](#zip)
* [`zipObject`](#zipObject)
* [`average`](#average)

</details>


### BROWSER
<details>
<summary>点击查看</summary>

* [`copyToClipboard`](#copyToClipboard)
* [`getScrollPosition`](#getScrollPosition)
* [`getStyle`](#getStyle)
* [`hasClass`](#hasClass)
* [`hide`](#hide)
* [`scrollToTop`](#scrollToTop)
* [`steStyle`](#steStyle)
* [`show`](#show)
* [`toggleClass`](#toggleClass)

</details>

### FUNCTION
<details>
<summary>点击查看</summary>

* [`once`](#once)
* [`debounce`](#debounce)

</details>

### Math
<details>
<summary>点击查看</summary>

* [`factorial`](#factorial)
* [`gcd`](#gcd)
* [`inRange`](#inRange)
* [`isDivisible`](#isDivisible)
* [`randomIntegerInRange`](#randomIntegerInRange)
* [`randomNumberInRange`](#randomNumberInRange)
* [`round`](#round)

</details>

### OBJECT
<details>
<summary>点击查看</summary>

* [`pick`](#pick)
* [`cleanObj`](#cleanObj)
* [`invertKeyValus`](#invertKeyValus)
* [`lowercaseKeys`](#lowercaseKeys)
* [`merge`](#merge)
* [`size`](#size)

</details>

### OBJECT
<details>
<summary>点击查看</summary>

* [`digtize`](#digtize)
* [`anagrams`](#anagrams)
* [`byteSize`](#byteSize)
* [`Capitalizes`](#Capitalizes)
* [`capitalizeEveryWord`](#capitalizeEveryWord)
* [`Capitalizes`](#Capitalizes)
* [`escapeHTML`](#escapeHTML)
* [`fromCamelCase`](#fromCamelCase)
* [`mask`](#mask)
* [`palindrome`](#palindrome)
* [`reverseString`](#reverseString)
* [`sortString`](#sortString)
* [`toCamelCase`](#toCamelCase)
* [`truncateString`](#truncateString)
* [`unescapeHTML`](#unescapeHTML)

</details>

### Type
<details>
<summary>点击查看</summary>

* [`isValidJSON`](#isValidJSON)
* [`getType`](#getType)

</details>

### UTILITY
<details>
<summary>点击查看</summary>

* [`coalesce`](#coalesce)
* [`coalesceFactory`](#coalesceFactory)
* [`extendHex`](#extendHex)
* [`getURLParams`](#getURLParams)
* [`hexToGRB`](#hexToGRB)
* [`randomHexCode`](#randomHexCode)
* [`RGBToHex`](#RGBToHex)
* [`timeTaken`](#timeTaken)
* [`uuid`](#uuid)
* [`validEmail`](#validEmail)

</details>

---

## ARRAY

### ArrayConcat
数组拼接
```js
    viper.ArrayConcat = (arr, ...args) => [].concat(arr, ...args);

```
<details>
<summary>例子</summary>

```js
viper.ArrayConcat([1], [1, 2, 3, [4]]) //  [1, 2, 3, [4]]
```

</details>

<br>[⬆ Back to top](#viperjs)

### difference
数组比较 过滤出数组 a中数组b不包含的值
```js
    viper.difference = (a, b) => {
        const s = new Set(b)
        return a.filter(x => !s.has(x))
    }
```
<details>
<summary>例子</summary>

```js
viper.difference([1,2,3], [1,2]) 
// [3]
```

</details>

<br>[⬆ Back to top](#viperjs)

### includes
数组|字符串包含
```js
    viper.includes = (collection, val, formIdex=0) => collection.slice(formIdex).indexOf(val) != -1
```
<details>
<summary>例子</summary>

```js
viper.includes("30-seconds-of-code", "code") // true
viper.includes([1, 2, 3, 4], [1, 2], 1) // false
```

</details>

<br>[⬆ Back to top](#viperjs)

### intersection
数组交集 返回两数组中同时包含的值
```js
    viper.intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x))}
```
<details>
<summary>例子</summary>

```js
viper.intersection([1,2,3], [4,3,2]) // [2,3] 
```

</details>

<br>[⬆ Back to top](#viperjs)


### remove
根据函数移除数组中的元素并返回移除元素 
```js
    viper.remove = (arr, fn) => Array.isArray(arr) ? arr.filter(fn).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1); 
        return acc.concat(val)
    }, []) : []
```
<details>
<summary>例子</summary>

```js
viper.remove([1, 2, 3, 4], n => n % 2 == 0)  //  [2, 4]
```

</details>

<br>[⬆ Back to top](#viperjs)


### sample
随机获取数组或字符串中一个元素
```js
    viper.sample = arr => arr[Math.floor(Math.random() * arr.length)]
```
<details>
<summary>例子</summary>

```js
viper.sample([1,2,3]) // 2 
```

</details>

<br>[⬆ Back to top](#viperjs)


### sampleSize
从数组中获取n个随机元素，最大为数组的大小
```js
    viper.sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};
```
<details>
<summary>例子</summary>

```js
viper.sampleSize([1, 2, 3], 2); // [1,3]
viper.sampleSize([1, 2, 3], 4); // [1,3,2]
```

</details>

<br>[⬆ Back to top](#viperjs)


### chunk
chunk分割成指定大小的数组, 如果不能整分，剩余的会组成一个新的数组
```js
    viper.chunk = (arr, size) => Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>{
        return arr.slice(i * size, i * size + size)
    })
```
<details>
<summary>例子</summary>

```js
viper.chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

</details>

<br>[⬆ Back to top](#viperjs)


### compact
删除数组中错误的值 false, null, 0, “”, undefined, and NaN
```js
   viper.compact = arr => arr.filter(Boolean)
```
<details>
<summary>例子</summary>

```js
viper.compact([1, false, NaN]) //  [1]
```

</details>

<br>[⬆ Back to top](#viperjs)

### countOccurrences
统计数组中某个值出现的次数
```js
    viper.countOccurrences = (arr, val) => arr.reduce((a, v)=>(v === val ? a + 1 : a + 0), 0);
```
<details>
<summary>例子</summary>

```js
viper.countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```

</details>

<br>[⬆ Back to top](#viperjs)

### deepFlatten
深度平铺数组 转换为一维数组
```js
    viper.deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))
```
<details>
<summary>例子</summary>

```js
viper.deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

</details>

<br>[⬆ Back to top](#viperjs)

### flatten
创建指定唯度的数组 默认为1
```js
    viper.flatten = (arr, depth =1) => depth != 1 
        ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
        : arr.reduce((a, v) => a.concat(v), [])
```
<details>
<summary>例子</summary>

```js
viper.flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
viper.flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
```

</details>

<br>[⬆ Back to top](#viperjs)


### forEachRight
从数组右边开始对每个元素执行指定函数
```js
    viper.forEachRight = (arr, callback) => arr.slice(0).reverse().forEach(callback)
```
<details>
<summary>例子</summary>

```js
viper.forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```

</details>

<br>[⬆ Back to top](#viperjs)


### distinctValuesOfArray
数组去重
```js
   viper.distinctValuesOfArray = arr => [...new Set(arr)]
```
<details>
<summary>例子</summary>

```js
viper.distinctValuesOfArray([1, 2, 2, 3, 4, 4, 5]); // [1,2,3,4,5]
```

</details>

<br>[⬆ Back to top](#viperjs)


### sampleSize
从右删除指定位置n的元素， n默认为1
```js
    viper.dropRight = (arr, n = 1) => arr.slice(0, -n)
};
```
<details>
<summary>例子</summary>

```js
viper.dropRight([1, 2, 3]); // [1,2]
viper.dropRight([1, 2, 3], 2); // [1]
viper.dropRight([1, 2, 3], 42); // []
```

</details>

<br>[⬆ Back to top](#viperjs)


### everyNth
返回数组中的每个第n个元素
```js
    viper.everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```
<details>
<summary>例子</summary>

```js
viper.everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```

</details>

<br>[⬆ Back to top](#viperjs)



### ArrayConcat
返回数组中唯一值
```js
    viper.filterNonUnique = arr => arr.filter( i => arr.indexOf(i) === arr.lastIndexOf(i))
```
<details>
<summary>例子</summary>

```js
viper.filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1,3,5]
```

</details>

<br>[⬆ Back to top](#viperjs)

11111111
### indexOfAll
返回数组中val出现的所有索引
```js
    viper.indexOfAll = (arr, val) => {
        const indices = []
        arr.forEach((el, i) => el === val && indices.push(i))
        return indices
    }
```
<details>
<summary>例子</summary>

```js
viper.indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
viper.indexOfAll([1, 2, 3], 4); // []
```

</details>

<br>[⬆ Back to top](#viperjs)

### initial
返回除最后一个数组外的所有元素
```js
    viper.initial = (arr) => arr.slice(0, -1)
```
<details>
<summary>例子</summary>

```js
initial([1, 2, 3]); // [1,2]
```

</details>

<br>[⬆ Back to top](#viperjs)

### initializeArrayWithRange
初始化一个包含指定范围中的数字的数组
```js
    viper.initializeArrayWithRange = (end, start = 0, step = 1) => Array.from({length : Math.ceil((end + 1 -start) / step)}).map((v, i)=> i * step + start)
```
<details>
<summary>例子</summary>

```js
viper.initializeArrayWithRange(7, 3); // [3,4,5,6,7]
viper.initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]
```

</details>

<br>[⬆ Back to top](#viperjs)


### initializeArrayWithValues
初始化指定长度并填充初始值 
```js
    viper.initializeArrayWithValues = (n, val = 0) => Array(n).fill(val)
```
<details>
<summary>例子</summary>

```js
viper.initializeArrayWithValues(5, 2); // [2,2,2,2,2]
```

</details>

<br>[⬆ Back to top](#viperjs)


### isSorted
是否排序 正序返回1 降序返回-1 未排序返回0
```js
    viper.isSorted = arr => {
        const direction = arr[0] > arr[1] ? -1 : 1;
        for(let [i, val] of arr.entries()){
            if(i === arr.length - 1){
                return direction
            } else if((val - arr[i + 1]) * direction > 0){
                return 0
            }
        }
    }
```
<details>
<summary>例子</summary>

```js
viper.isSorted([0, 1, 2, 2]); // 1
viper.isSorted([4, 3, 2]); // -1
viper.isSorted([4, 3, 5]); // 0
```

</details>

<br>[⬆ Back to top](#viperjs)


### join
使用分隔符和结束符拼接所有数组中的元素并返回拼接好的字符串
```js
   viper.join = (arr, separator = ',', end = separator) => arr.reduce((acc, val, i) => i == arr.length - 2 ? acc + val + end : i == arr.length - 1 ? acc + val : acc + val + separator, '')
};
```
<details>
<summary>例子</summary>

```js
viper.join(['pen', 'pineapple', 'apple', 'pen'], ',', '&'); // "pen,pineapple,apple&pen"
viper.join(['pen', 'pineapple', 'apple', 'pen'], ','); // "pen,pineapple,apple,pen"
viper.join(['pen', 'pineapple', 'apple', 'pen']); // "pen,pineapple,apple,pen"
```

</details>

<br>[⬆ Back to top](#viperjs)


### last
返回最后一个元素
```js
    viper.last = arr => arr[arr.length - 1];
```
<details>
<summary>例子</summary>

```js
viper.last([1, 2, 3]); // 3
```

</details>

<br>[⬆ Back to top](#viperjs)


### longestItem
返回多个可迭代对象中长度最长的一个
```js
   viper.longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0]
```
<details>
<summary>例子</summary>

```js
viper.longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
viper.longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
viper.longestItem([1, 2, 3], 'foobar'); // 'foobar'
```

</details>

<br>[⬆ Back to top](#viperjs)

### maxN
从提供的数组中返回n个最大元素 如果n大于或等于提供的数组长度，则返回原始数组（按降序排列）
```js
    viper.maxN = (arr, n = 1) => [...arr].sort((a,b) => b - a).slice(0, n)
```
<details>
<summary>例子</summary>

```js
viper.maxN([1, 2, 3]); // [3]
viper.maxN([1, 2, 3], 2); // [3,2]
```

</details>

<br>[⬆ Back to top](#viperjs)

### minN
从提供的数组中返回n个最小元素。如果n大于或等于提供的数组长度，则返回原始数组（按升序排序）
```js
    viper.minN = (arr, n =1) => [...arr].sort((a, b) => a - b).slice(0, n)
```
<details>
<summary>例子</summary>

```js
viper.minN([1, 2, 3]); // [1]
viper.minN([1, 2, 3], 2); // [1,2]
```

</details>

<br>[⬆ Back to top](#viperjs)

### nthElement
返回数组的第n个元素
```js
    viper.nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n , n + 1) : arr.slice(n)[0])
```
<details>
<summary>例子</summary>

```js
viper.nthElement(['a', 'b', 'c'], 1); // 'b'
viper.nthElement(['a', 'b', 'b'], -3); // 'a'
```

</details>

<br>[⬆ Back to top](#viperjs)


### partition
根据所提供的函数对每个元素的真实性将这些元素分成两个数组
```js
    viper.partition = (arr, fn) =>{
        return  arr.reduce(
            (acc, val, i, arr) => {
                acc[fn(val, i, arr) ? 0 : 1].push(val)
                return acc
            },
            [[], []]
        )
    }
```
<details>
<summary>例子</summary>

```js
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
viper.partition(users, o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```

</details>

<br>[⬆ Back to top](#viperjs)


### pull
返回的过滤指定的值后的数组
```js
   viper.pull = (arr, ...args) => {
        let argState = Array.isArray(args[0]) ? args[0] : args;
        let pulled = arr.filter((v, i) => !argState.includes(v));
        arr.length = 0;
        pulled.forEach(v => arr.push(v))
    }
```
<details>
<summary>例子</summary>

```js
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
viper.pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
```

</details>

<br>[⬆ Back to top](#viperjs)


### pullAtIndex
返回的过滤指定的索引后的数组, 返回过滤的值 
```js
    viper.pullAtIndex = (arr, pullArr) => {
        let removed = [];
        let pulled = arr.map((v, i) => pullArr.includes(i) ? removed.push(v) : v).filter((v, i)=> !pullArr.includes(i))
        arr.length = 0;
        pulled.forEach(v => arr.push(v))
        return removed
    }
};
```
<details>
<summary>例子</summary>

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = viper.pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```

</details>

<br>[⬆ Back to top](#viperjs)


### pullAtValue
改变原始数组以过滤出指定的值,返回删除的元素
```js
    viper.pullAtValue = (arr, pullArr) => {
        let removed = [],
            pushToRemove = arr.forEach((v, i)=> (pullArr.includes(v) ? removed.push(v) : v)),
            mutateTo = arr.filter((v,i) => !pullArr.includes(v));
        arr.length = 0
        mutateTo.forEach(v => arr.push(v))
        return removed
    }
```
<details>
<summary>例子</summary>

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = viper.pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```
</details>

<br>[⬆ Back to top](#viperjs)


### reducedFilter
根据条件过滤一个对象数组，同时过滤未指定的键
```js
    viper.reducedFilter = (data, keys, fn) => data.filter(fn).map(el => keys.reduce((acc, key) => {
        acc[key] = el[key]
        return acc
    }, {}))
```
<details>
<summary>例子</summary>

```js
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

viper.reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
```

</details>

<br>[⬆ Back to top](#viperjs)


### shuffle
洗牌数组
```js
   viper.shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr
    }
```
<details>
<summary>例子</summary>

```js
const foo = [1, 2, 3];
viper.shuffle(foo); // [2,3,1], foo = [1,2,3]
```

</details>

<br>[⬆ Back to top](#viperjs)


### similarity
获取数组交集
```js
    viper.similarity = (arr, values) => arr.filter(v => values.includes(v))
};
```
<details>
<summary>例子</summary>

```js
viper.similarity([1, 2, 3], [1, 2, 4]); // [1,2]
```

</details>

<br>[⬆ Back to top](#viperjs)


### symmetricDifference
返回两个数组之间的不同值
```js
    viper.symmetricDifference = (a, b) => {
        const sA = new Set(a), 
            sB = new Set(b);
        return [...a.filterx(x => !sB.has(x)), ...b.filter(x => !sA.has(x))]
    }
```
<details>
<summary>例子</summary>

```js
viper.symmetricDifference([1, 2, 3], [1, 2, 4]); // [3,4]
```

</details>

<br>[⬆ Back to top](#viperjs)



### tail
返回数组中除第一个元素外的所有元素
```js
    viper.tail = arr => (arr.length > 1 ? arr.slice(1) : arr)
```
<details>
<summary>例子</summary>

```js
viper.tail([1, 2, 3]); // [2,3]
viper.tail([1]); // [1]
```

</details>

<br>[⬆ Back to top](#viperjs)

### take
返回从头开始删除n个元素的数组
```js
    viper.take = (arr, n = 1) => arr.slice(0 ,n)
```
<details>
<summary>例子</summary>

```js
viper.take([1, 2, 3], 5); // [1, 2, 3]
viper.take([1, 2, 3], 0); // []
```

</details>

<br>[⬆ Back to top](#viperjs)

### takeRight
返回从最后删除n个元素的数组
```js
    viper.takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length)
```
<details>
<summary>例子</summary>

```js
viper.takeRight([1, 2, 3], 2); // [ 2, 3 ]
viper.takeRight([1, 2, 3]); // [3]
```

</details>

<br>[⬆ Back to top](#viperjs)

### union
返回数组合集
```js
    viper.union = (a ,b) => Array.from(new Set([...a, ...b]))
```
<details>
<summary>例子</summary>

```js
viper.union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```

</details>

<br>[⬆ Back to top](#viperjs)


### without
创建一个排除所有给定值的数组
```js
    viper.without = (arr, ...args) => arr.filter(v => args.indexOf(v) === -1)
```
<details>
<summary>例子</summary>

```js
viper.without([2, 1, 2, 3], 1, 2); // [3]
```

</details>

<br>[⬆ Back to top](#viperjs)


### zip
根据原始数组中的位置进行分组创建新的数组 如果参数数组的长度不一致，那么在未找到值的地方使用undefined
```js
    viper.zip = (...arrays) => {
        const maxLength = Math.max(...arrays.map(x => x.length));
        return Array.from({length : maxLength}).map((_, i) => {
            return Array.from({length : arrays.length}, (_, k) => arrays[k][i])
        })
    }
```
<details>
<summary>例子</summary>

```js
viper.zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
viper.zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
```

</details>

<br>[⬆ Back to top](#viperjs)


### zipObject
给定一组有效的属性标识符和一个值数组，返回一个将属性关联到值的对象,未找到值的地方使用undefined
```js
   viper.zipObject = (props, values) => props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {})
};
```
<details>
<summary>例子</summary>

```js
viper.zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
viper.zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
```

</details>

<br>[⬆ Back to top](#viperjs)


### average
求数字数组的平均数
```js
    viper.average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length
```
<details>
<summary>例子</summary>

```js
viper.average([1,2,3]) // 2
```

</details>

<br>[⬆ Back to top](#viperjs)

