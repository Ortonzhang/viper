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

* [`digitize`](#digitize)
* [`anagrams`](#anagrams)
* [`byteSize`](#byteSize)
* [`Capitalize`](#Capitalize)
* [`capitalizeEveryWord`](#capitalizeEveryWord)
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
* [`hexToRGB`](#hexToRGB)
* [`randomHexCode`](#randomHexCode)
* [`RGBToHex`](#RGBToHex)
* [`timeTaken`](#timeTaken)
* [`UUIDGeneratorBrowser`](#UUIDGeneratorBrowser)
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

## BROWSER

### copyToClipboard
复制字符串到剪贴板
```js
    viper.copyToClipboard = str => {
        const el = document.createElement('textarea')
        el.value = str
        el.setAttribute('readonly', '')
        el.style.position = 'absolute'
        el.style.left ='-9999px'
        document.body.appendChild(el)

        const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false

        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        if(selected){
            document.getSelection().removeAllRanges()
            document.getSelection().addRange(selected)
        }
    }

```
<details>
<summary>例子</summary>

```js
viper.copyToClipboard('111') //  111复制到了剪贴板
```

</details>

<br>[⬆ Back to top](#viperjs)

### getScrollPosition
返回当前页面的滚动位置
```js
    viper.getScrollPosition = (el = window) =>({
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    })
```
<details>
<summary>例子</summary>

```js
viper.getScrollPosition() //  {x: 3, y: 6023}
```

</details>

<br>[⬆ Back to top](#viperjs)

### getStyle
返回指定元素的CSS规则的值
```js
    viper.getStyle = (el, ruleName) => getComputedStyle(el)[ruleName]
```
<details>
<summary>例子</summary>

```js
viper.getStyle(document.querySelector('p'), 'font-sise') // 16px
```

</details>

<br>[⬆ Back to top](#viperjs)

### hasClass
元素是否包含类
```js
    viper.hasClass = (el, className) => el.classList.contains(className)}
```
<details>
<summary>例子</summary>

```js
viper.hasClass(document.querySelector('p.box'), 'box') // ture
```

</details>

<br>[⬆ Back to top](#viperjs)


### hide
隐藏指定所有元素
```js
    viper.hide = (...el) => [...el].forEach( e => (e.style.display = 'node'))s
```
<details>
<summary>例子</summary>

```js
viper.hide(document.querySelectorAll('img')) // 页面中的所以img被隐藏
```

</details>

<br>[⬆ Back to top](#viperjs)


### scrollToTop
平滑返回顶部
```js
    viper.scrollToTop  = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop
        if(c > 0){
            window.requestAnimationFrame(scrollToTop)
            window.scrollTo(0, c - c / 8)
        }
    }
```
<details>
<summary>例子</summary>

```js
viper.scrollToTop() // 页面返回顶部
```

</details>

<br>[⬆ Back to top](#viperjs)


### steStyle
设置元素的css样式
```js
    viper.steStyle = (el, ruleNmae, val) =>{ el.style[ruleNmae] = val }
```
<details>
<summary>例子</summary>

```js
viper.steStyle(document.querySelector('p'), 'font-size', '18px') // 第一个p元素字体大小为18像素
```

</details>

<br>[⬆ Back to top](#viperjs)


### show
显示所有指定的元素
```js
    viper.show = (...el) => [...el].forEach(e.style.display = '')
```
<details>
<summary>例子</summary>

```js
viper.show(document.querySelectorAll('img')) // 显示所有img标签
```

</details>

<br>[⬆ Back to top](#viperjs)


### toggleClass
切换元素类名
```js
   viper.toggleClass = (el, className) => el.classList.toggleClass(className)
```
<details>
<summary>例子</summary>

```js
viper.toggleClass(document.querySelector('div.box'), 'box') // 切换box类名
```

</details>

<br>[⬆ Back to top](#viperjs)


## FUNCTION

### once
确保函数只调用一次
```js
    viper.once = fn => {
        let called = false;
        return function(...args){
            if(called) return
            called = true
            return fn.call(this, args)
        }
    }

```
<details>
<summary>例子</summary>

```js
document.body.addEventListener('click', once(()=>{console.log(111)})) // 函数只会调用一次
```

</details>

<br>[⬆ Back to top](#viperjs)

### debounce
防抖
```js
    viper.debounce = (func, wait, immediate) => {

        var timeout, result;

        return function () {
            var context = this;
            var args = arguments;

            if (timeout) clearTimeout(timeout);
            if (immediate) {
                // 如果已经执行过，不再执行
                var callNow = !timeout;
                timeout = setTimeout(function(){
                    timeout = null;
                }, wait)
                if (callNow) func.apply(context, args)
            }
            else {
                timeout = setTimeout(function(){
                    func.apply(context, args)
                }, wait);
            }
        }
    }
```
<details>
<summary>例子</summary>

```js
viper.debounce(()=>{document.body.addEventListener('mouseover', ()=>{console.log(111)})}, 300) 
```

</details>

<br>[⬆ Back to top](#viperjs)



## MATH

### factorial
阶乘
```js
    viper.factorial = n => n <= 1 ? 1 : n * factorial(n - 1)
```
<details>
<summary>例子</summary>

```js
viper.factorial(6) // 720
```

</details>

<br>[⬆ Back to top](#viperjs)

### gcd
最大公约数
```js
    viper.gcd = (x, y) => !y ? x : gcd(y, x % y);
```
<details>
<summary>例子</summary>

```js
viper.gcd(8, 36) // 4
viper.gcd(...[8, 36, 12]) // 4
```

</details>

<br>[⬆ Back to top](#viperjs)

### inRange
是否在指定范围内
```js
    viper.inRange = (n, start, end = null) => {
        if(end && start > end) end = [start, (start = end)][0]
        return end == null ? n >= 0 && n < start : n >= start && n < end 
    }
```
<details>
<summary>例子</summary>

```js
viper.inRange(3, 4, 5) // false
viper.inRange(3, 4) // true
```

</details>

<br>[⬆ Back to top](#viperjs)

### isDivisible
数值2能否否能整除数值1
```js
    viper.isDivisible = (first, second) => second % first === 0
```
<details>
<summary>例子</summary>

```js
viper.isDivisible(3, 9) // true
```

</details>

<br>[⬆ Back to top](#viperjs)

### randomIntegerInRange
随机获取指定范围内的整数
```js
     viper.randomIntegerInRange = (min, max) => Math.floor(Math.random() * ( max - min + 1)) + min
```
<details>
<summary>例子</summary>

```js
viper.randomIntegerInRange(2, 5) // 3
```

</details>

<br>[⬆ Back to top](#viperjs)

### randomNumberInRange
随机获取指定范围内的小数
```js
    viper.randomNumberInRange = (min, max) => Math.random() * (max - min) + min
```
<details>
<summary>例子</summary>

```js
viper.randomNumberInRange(2, 10); // 6.0211363285087005
```

</details>

<br>[⬆ Back to top](#viperjs)

### round
返回指定位数的小数，省略第二个参数 四舍五入为整数
```js
    viper.round = (n, decimals=0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
```
<details>
<summary>例子</summary>

```js
viper.round(4.22) // 4
viper.round(1.005, 2); // 1.01
```

</details>

<br>[⬆ Back to top](#viperjs)



## OBJECT

### pick
从对象中挑选与给定键对应的键值对
```js
    viper.pick = (obj, arr) => arr.reduce((acc, curr)=> (curr in obj && (acc[curr] = obj[curr]), acc), {})
```
<details>
<summary>例子</summary>

```js
viper.pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
```

</details>

<br>[⬆ Back to top](#viperjs)

### cleanObj
删除指定属性外的其他属性
```js
    viper.cleanObj = (obj, keysToKeep = [], childIndicator) => {
        Object.keys(obj).forEach(key => {
            if(key === childIndicator) {
                cleanObj(obj[key], keysToKeep, childIndicator)
            } else if(!keysToKeep.includes(key)){
                delete obj[key]
            }
        })
        return obj
    }
```
<details>
<summary>例子</summary>

```js
const testObj = { a: 1, b: 2, children: { a: 1, b: 2 } };
viper.cleanObj(testObj, ['a'], 'children'); // { a: 1, children : { a: 1}}
```

</details>

<br>[⬆ Back to top](#viperjs)

### invertKeyValues
反转key和value
```js
    viper.invertKeyValues = obj => Object.keys(obj).reduce((acc, key)=> {
        acc[obj[key]] = key
        return acc
    },{})
```
<details>
<summary>例子</summary>

```js
viper.invertKeyValues({ name: 'John', age: 20 }); // { 20: 'age', John: 'name' }
```

</details>

<br>[⬆ Back to top](#viperjs)

### lowercaseKeys
小写所有key
```js
    viper.lowercaseKeys = obj => Object.keys(obj).reduce((acc, key)=> {
        acc[key.toLowerCase()] = obj[key]
        return acc
    },{})
```
<details>
<summary>例子</summary>

```js
const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = viper.lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```

</details>

<br>[⬆ Back to top](#viperjs)

### merge
合并两个或者多个对象
```js
    viper.merge = (...objs) => [...objs].reduce(
        (acc, obj) => Object.keys(obj).reduce(
            (a, k) => {
                 acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
                 return acc
            },{}),
        {}
    )
```
<details>
<summary>例子</summary>

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
viper.merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```

</details>

<br>[⬆ Back to top](#viperjs)

### size
获取对象、数组、字符串的大小
```js
    viper.size = val => Array.isArray(val) ? val.length : val && typeof val === 'object' ? val.size || val.length || Object.keys(val).length : typeof val === 'string' ? new Blob([val]).size : 0
```
<details>
<summary>例子</summary>

```js
viper.size([1, 2, 3, 4, 5]); // 5
viper.size('size'); // 4
viper.size({ one: 1, two: 2, three: 3 }); // 3
```

</details>

<br>[⬆ Back to top](#viperjs)


## STRING

### digitize
将数值字符串转换成数组
```js
    viper.digitize = n => [...`${n}`].map(i => parseInt(i))
```
<details>
<summary>例子</summary>

```js
viper.digitize(123); // [1, 2, 3]
```

</details>

<br>[⬆ Back to top](#viperjs)

### anagrams
生成一个字符串所有的排列组合
```js
    viper.anagrams = str => {
        if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : str
        return str.split('').reduce((acc, letter, i) => acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
    }
```
<details>
<summary>例子</summary>

```js
viper.anagrams('abc'); // ['abc','acb','bac','bca','cab','cba']
```

</details>

<br>[⬆ Back to top](#viperjs)

### byteSize
返回字节大小
```js
    viper.byteSize = str => new Blob([val]).size
```
<details>
<summary>例子</summary>

```js
viper.byteSize('😀'); // 4
viper.byteSize('Hello World'); // 11
```

</details>

<br>[⬆ Back to top](#viperjs)

### Capitalize
首字母大写
```js
    viper.Capitalize = ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
```
<details>
<summary>例子</summary>

```js
viper.Capitalize('fooBar'); // 'FooBar'
viper.Capitalize('fooBar', true); // 'Foobar'
```

</details>

<br>[⬆ Back to top](#viperjs)

### capitalizeEveryWord
大写单词的每个首字母
```js
    viper.capitalizeEveryWord = str => str.replace(/\d[a-z]/g, char => char.toUpperCase())
```
<details>
<summary>例子</summary>

```js
viper.capitalizeEveryWord('hello world!'); // 'Hello World!'
```

</details>

<br>[⬆ Back to top](#viperjs)

### decapitalize
首字母小写
```js
    viper.decapitalize = ([first, ...rest], upperRest = false) => first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
```
<details>
<summary>例子</summary>

```js
viper.decapitalize('FooBar'); // 'fooBar'
viper.decapitalize('FooBar', true); // 'fOOBAR'
```

</details>

<br>[⬆ Back to top](#viperjs)

### escapeHTML
转义HTML
```js
    viper.escapeHTML = str => str.replace(
        /[&<>'"]/g,
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        })([tag] || tag)
    )
```
<details>
<summary>例子</summary>

```js
viper.escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```

</details>

<br>[⬆ Back to top](#viperjs)

### fromCamelCase
将驼峰字符改成字符串
```js
   viper.fromCamelCase = (str, separator = '_') => str.replace(/([a-z\d])(A-Z)/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase()
```
<details>
<summary>例子</summary>

```js
viper.fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
viper.fromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'
viper.fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
```

</details>

<br>[⬆ Back to top](#viperjs)


### mask
用指定的字符替换除最后指定个字符以外的所有字符
```js
    viper.mask = (str, num = 4, mask = '*') => {
        return ('' + str).slice(0, -num).replace(/./g, mask) + ('' + str).slice(-num)
    }
```
<details>
<summary>例子</summary>

```js
viper.mask(1234567890); // '******7890'
viper.mask(1234567890, 3); // '*******890'
viper.mask(1234567890, -4, '$'); // '$$$$567890'
```

</details>

<br>[⬆ Back to top](#viperjs)

### palindrome
检查回文
```js
     viper.palindrome = (str) => {
        const s = str.toLowerCase().replace(/[\W_]/g, '')
        return (
            s === s.split().reverse().join('')
        )
    }
```
<details>
<summary>例子</summary>

```js
viper.palindrome('taco cat'); // true
```

</details>

<br>[⬆ Back to top](#viperjs)

### reverseString
反转字符串
```js
    viper.reverseString = (str) => [...str].reverse().join('')
```
<details>
<summary>例子</summary>

```js
viper.reverseString('viper') // repiv
```

</details>

<br>[⬆ Back to top](#viperjs)

### sortString
按字母顺序排列字符串中的字符
```js
    viper.sortString = (str) => [...str].sort((a, b) => a.localeCompare(b)).join('')
```
<details>
<summary>例子</summary>

```js
viper.sortString('cabbage'); // 'aabbceg'
```

</details>

<br>[⬆ Back to top](#viperjs)

### toCamelCase
将字符串改为驼峰字符串
```js
    viper.toCamelCase = (str) => {
        let s = 
            str && 
            str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
        return s.slice(0, 1).toLowerCase() + s.slice(1)
    }
```
<details>
<summary>例子</summary>

```js
viper.toCamelCase('some_database_field_name'); // 'someDatabaseFieldName'
viper.toCamelCase('Some label that needs to be camelized'); // 'someLabelThatNeedsToBeCamelized'
viper.toCamelCase('some-javascript-property'); // 'someJavascriptProperty'
```

</details>

<br>[⬆ Back to top](#viperjs)

### truncateString
截断字符串在后面添加…
```js
    viper.truncateString = (str, num) => {
        return str.length > num ? str.slice(0, num > 3 ? num -3 : num) + '...' : str
    }
```
<details>
<summary>例子</summary>

```js
truncateString('boomerang', 7); // 'boom...'
```

</details>

<br>[⬆ Back to top](#viperjs)

### unescapeHTML
反转义HTML字符串
```js
   viper.unescapeHTML = (str) => str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag =>
        ({
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&#39;': "'",
            '&quot;': '"'
        }[tag] || tag)
    )
```
<details>
<summary>例子</summary>

```js
viper.unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // '<a href="#">Me & you</a>'
```
</details>

<br>[⬆ Back to top](#viperjs)


## TYPE

### digitize
校验字符是否是json
```js
      viper.isValidJSON = obj => {
        try {
            JSON.parse(obj)
        } catch (e) {
            return false
        }
    }
```
<details>
<summary>例子</summary>

```js
viper.isValidJSON('{"name":"Adam","age":20}'); // true
viper.isValidJSON('{"name":"Adam",age:"20"}'); // false
viper.isValidJSON(null); // true
```

</details>

<br>[⬆ Back to top](#viperjs)

### getType
获取类型 undefined、null、NaN 直接返回 其他返回小写的构造函数的名称
```js
    viper.getType = v => v !== v ? 'NaN' : v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()
```
<details>
<summary>例子</summary>

```js
viper.getType(new Set([1, 2, 3])); // 'set'
viper.getType({}) // object
viper.getType([]) // array
```

</details>

<br>[⬆ Back to top](#viperjs)



## UTILITY

### coalesce
返回第一个非null非undefined的值
```js
    viper.coalesce = (...args) => args.find( _ => ![undefined, null].includes(_))
```
<details>
<summary>例子</summary>

```js
viper.coalesce(null, undefined, '', NaN, 'Waldo'); // ""
```

</details>

<br>[⬆ Back to top](#viperjs)

### coalesceFactory
返回第一个符合过滤函数的值
```js
    viper.coalesceFactory = valid => (...args) => args.find(valid)
```
<details>
<summary>例子</summary>

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
viper.customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```

</details>

<br>[⬆ Back to top](#viperjs)

### extendHex
将3位数的hex颜色值转换成6为数的值
```js
    viper.extendHex = shortHex => '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x + x ).join('')
```
<details>
<summary>例子</summary>

```js
viper.extendHex('#03f'); // '#0033ff'
```

</details>

<br>[⬆ Back to top](#viperjs)

### getURLParams
返回对象包含url上的参数
```js
   viper.getURLParams = url => url.match(/([^?=&]+)(=([^&]*))/g).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1 )),a), {}
    )
```
<details>
<summary>例子</summary>

```js
viper.getURLParams('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
```

</details>

<br>[⬆ Back to top](#viperjs)

### hexToRGB
hex转rgb
```js
    viper.hexToRGB = hex => {
        let alpha = false,
        h = hex.slice(hex.startsWith('#') ? 1 : 0);
        if (h.length === 3) h = [...h].map(x => x + x).join('');
        else if (h.length === 8) alpha = true;
        h = parseInt(h, 16);
        return (
            'rgb' +
            (alpha ? 'a' : '') +
            '(' +
            (h >>> (alpha ? 24 : 16)) +
            ', ' +
            ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
            ', ' +
            ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
            (alpha ? `, ${h & 0x000000ff}` : '') +
            ')'
        );
    }
```
<details>
<summary>例子</summary>

```js
viper.hexToRGB('#27ae60ff'); // 'rgba(39, 174, 96, 255)'
viper.hexToRGB('27ae60'); // 'rgb(39, 174, 96)'
viper.hexToRGB('#fff'); // 'rgb(255, 255, 255)'
```

</details>

<br>[⬆ Back to top](#viperjs)

### randomHexCode
随机生成hex颜色值
```js
    viper.randomHexCode = () => {
        let n = ((Math.random() * 0xfffff) | 0).toString(16)
        return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n)
    }
```
<details>
<summary>例子</summary>

```js
viper.randomHexCode()  // "#e34155"
```

</details>

<br>[⬆ Back to top](#viperjs)

### RGBToHex
RGB转hex色值
```js
    viper.RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')
```
<details>
<summary>例子</summary>

```js
viper.RGBToHex(255, 165, 1); // 'ffa501'
```

</details>

<br>[⬆ Back to top](#viperjs)

### timeTaken
返回函数运行时长
```js
    viper.timeTaken = callback => {
        console.time('timeTaken')
        const cb = callback()
        console.timeEnd('timeTaken')
        return cb
    }
```
<details>
<summary>例子</summary>

```js
viper.timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```

</details>

<br>[⬆ Back to top](#viperjs)

### UUIDGeneratorBrowser
使用crypto API 生成UUID 符合RFC4122 版本 4
```js
    viper.UUIDGeneratorBrowser = () => {
       return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }
```
<details>
<summary>例子</summary>

```js
viper.UUIDGeneratorBrowser() // '7982fcfe-5721-4632-bede-6000885be57d'
```

</details>

<br>[⬆ Back to top](#viperjs)

### validEmail
邮箱验证
```js
   viper.validEmail = str => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)

```
<details>
<summary>例子</summary>

```js
viper.validEmail('mymail@gmail.com') //  true
```

</details>

<br>[⬆ Back to top](#viperjs)