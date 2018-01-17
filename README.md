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
使用 Array.concat() ，通过在 args 中附加任何数组 和/或 值来拼接一个数组
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
根据数组 b 创建一个 Set 对象，然后在数组 a 上使用  Array.filter() 方法，过滤出数组 b 中不包含的值
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
使用 indexOf() 来检查是否包含该值。如果省略最后一个参数 fromIndex ，则会检查整个数组/字符串
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
根据数组 b 创建一个 Set 对象，然后在数组 a 上使用  Array.filter() 方法，只保留数组 b 中也包含的值
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
使用 Array.filter() 和 Array.reduce() 来查找返回真值的数组元素，使用 Array.splice() 来移除元素。 func 有三个参数(value, index, array)
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
使用  Math.random() 生成一个随机数，乘以 length，并使用 Math.floor() 舍去小数获得到最接近的整数。这个方法也适用于字符串
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
使用洗牌算法打乱数组，再用slice取前n个元素，n默认为1,最大为数组长度
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
使用 Array.from() 创建一个新的数组，它的长度与将要生成的 chunk(块) 数量相匹配。 使用 Array.slice() 将新数组的每个元素映射到长度为 size 的 chunk 中。 如果原始数组不能均匀分割，最后的 chunk 将包含剩余的元素
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







