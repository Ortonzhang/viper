# viperjs

常用js片段组成的工具库,代码是es6编写，可以拿出单条片段进行babel再使用。

### 获取
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