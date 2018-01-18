(function(){
    var root = (typeof selef == 'object' && selef.selef == selef && selef) || (typeof global == 'object' && global.global == global && global) || this || {}
    var arrayProto = Array.prototype;
    var push = arrayProto.push;

    var viper = function(obj){
        if(!(this instanceof viper))return new viper(obj);
        this._wrapped = obj
    }
    if(typeof exports !='undefined' && !exports.nodeType){
        if(typeof module != 'undefined' && !module.nodeType && module.exports){
            exports = module.exports = viper;
        }
        exports.viper = viper
    } else {
        root.viper = viper
    }
    viper.VERSION = '0.1';

    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

    var isArrayLike = function(collection){
        var length = collection.length
        return typeof length == 'number' && length >=0 && length <= MAX_ARRAY_INDEX
    }

    viper.each = function(obj, callback){
        var length, i = 0;
        if(isArrayLike(obj)){
            length = obj.length;
            for(; i < length; i++){
                if(callback.call(obj[i], obj[i], i) === false){
                    break;
                }
            }
        } else {
            for(i in obj){
                if(callback.call(obj[i], obj[i], i) === false){
                    break;
                }
            }
        }
        return obj
    }

    viper.isFunction = (obj) => typeof obj == 'function' || false

    viper.functions = function(obj){
        var names = []
        for (var key in obj) {
            if (viper.isFunction(obj[key])) names.push(key)
        }
        return names.sort()
    }
    

    // Object
    // ----------------


    // 数组拼接
    viper.ArrayConcat = (arr, ...args) => [].concat(arr, ...args);

    // 数组比较 返回第二个数组不包含的值
    /**
     * 
     * @param {数组} a 
     * @param {数组} b 
     * 
     * 
     */
    viper.difference = (a, b) => {
        const s = new Set(b)
        return a.filter(x => !s.has(x))
    }
    // 数组|字符串包含 
    /**
     * 
     * @param {数组或字符串} collection 
     * @param {检查的value} val 
     * @param {开始位置默认为0} formIdex 
     */
    viper.includes = (collection, val, formIdex=0) => collection.slice(formIdex).indexOf(val) != -1

    // 数组交集 返回两数组中同时包含的值
    /**
     * 
     * @param {数组} a 
     * @param {数组} b 
     */
    viper.intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x))}

    // 移除数组中的元素并返回移除元素会改变原有数组
    /**
     * 
     * @param {数组} arr 
     * @param {函数} fn 三个参数 value index array 
     */
    viper.remove = (arr, fn) => Array.isArray(arr) ? arr.filter(fn).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1); 
        return acc.concat(val)
    }, []) : []

    //sample
    /**
     * 随机获取数组或字符串中一个元素
     */
    viper.sample = arr => arr[Math.floor( Math.random() * arr.length)]

    // 从数组中获取n个随机元素，最大为数组的大小
    viper.sampleSize = ([...arr], n = 1) => {
        let m = arr.length;
        while(m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]]
        }
        return arr.slice(0, n)
    }
    // chunk分割成指定大小的数组, 如果不能整分，剩余的会组成一个新的数组
    /**
     * 
     * @param {数组} arr 
     * @param {指定大小} size 
     */
    viper.chunk = (arr, size) => Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>{
        return arr.slice(i * size, i * size + size)
    })

    // 删除数组中错误的值 false, null, 0, "", undefined, and NaN
    viper.compact = arr => arr.filter(Boolean)
    
    // 统计数组中某个值出现的次数
    /**
     * 
     * @param {数组} arr 
     * @param {统计值} val 
     */
    viper.countOccurrences = (arr, val) => arr.reduce((a, v)=>(v === val ? a + 1 : a + 0), 0);

    // 深度平铺数组 转换为一维数组
    viper.deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v))) 

    // 创建指定唯度的数组 默认为1
    viper.flatten = (arr, depth =1) => depth != 1 
        ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
        : arr.reduce((a, v) => a.concat(v), [])

    // 从数组右边开始对每个元素执行指定函数
    viper.forEachRight = (arr, callback) => arr.slice(0).reverse().forEach(callback)

    // 数组去重
    viper.distinctValuesOfArray = arr => [...new Set(arr)]

    // 从右删除指定位置n的元素， n默认为1
    viper.dropRight = (arr, n = 1) => arr.slice(0, -n)

    // 依次返回第n个元素
    viper.everyNth = (arr, nth) => arr.filter((e, i)=> i % nth === nth - 1)

    // 返回数组中唯一值
    viper.filterNonUnique = arr => arr.filter( i => arr.indexOf(i) === arr.lastIndexOf(i))

    // 返回数组中val出现的所有索引
    viper.indexOfAll = (arr, val) => {
        const indices = []
        arr.forEach((el, i) => el === val && indices.push(i))
        return indices
    }

    // 返回数组中除去最后一个值的数组
    viper.initial = (arr) => arr.slice(0, -1)

    // 初始化指定范围的数组
    /**
     * 
     * @param {结束} end 
     * @param {开始 默认为0} start 
     * @param {步长 默认为1} step 
     */
    viper.initializeArrayWithRange = (end, start = 0, step = 1) => Array.from({length : Math.ceil((end + 1 -start) / step)}).map((v, i)=> i * step + start)
    
    // 初始化指定长度并填充初始值
    viper.initializeArrayWithValues = (n, val = 0) => Array(n).fill(val)

    // 是否排序 正序返回1 降序返回-1 未排序返回0
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

    // 使用分隔符和结束符拼接所有数组中的元素并返回拼接好的字符串
    /**
     * 
     * @param {数组} arr 
     * @param {分隔符 默认为,} separator 
     * @param {结束符 默认和分隔符相同} end 
     */
    viper.join = (arr, separator = ',', end = separator) => arr.reduce((acc, val, i) => i == arr.length - 2 ? acc + val + end : i == arr.length - 1 ? acc + val : acc + val + separator, '')

    //  返回最后一个元素
    viper.last = arr => arr[arr.length - 1];

    // 返回多个可迭代对象中长度最长的一个
    viper.longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0]

    // 从提供的数组中返回n个最大元素 如果n大于或等于提供的数组长度，则返回原始数组（按降序排列）
    viper.maxN = (arr, n = 1) => [...arr].sort((a,b) => b - a).slice(0, n)

    // 从提供的数组中返回n个最小元素。如果n大于或等于提供的数组长度，则返回原始数组（按升序排序）
    viper.minN = (arr, n =1) => [...arr].sort((a, b) => a - b).slice(0, n)

    // 返回数组的第n个元素
    viper.nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n , n + 1) : arr.slice(n)[0])

    // 根据所提供的函数对每个元素的真实性将这些元素分成两个数组
    viper.partition = (arr, fn) =>{
        return  arr.reduce(
            (acc, val, i, arr) => {
                acc[fn(val, i, arr) ? 0 : 1].push(val)
                return acc
            },
            [[], []]
        )
    }
    
    // 返回的过滤指定的值后的数组,改变原有数组
    viper.pull = (arr, ...args) => {
        let argState = Array.isArray(args[0]) ? args[0] : args;
        let pulled = arr.filter((v, i) => !argState.includes(v));
        arr.length = 0;
        pulled.forEach(v => arr.push(v))
    }
    // 返回的过滤指定的索引后的数组, 返回过滤的值 改变原有数组
    viper.pullAtIndex = (arr, pullArr) => {
        let removed = [];
        let pulled = arr.map((v, i) => pullArr.includes(i) ? removed.push(v) : v).filter((v, i)=> !pullArr.includes(i))
        arr.length = 0;
        pulled.forEach(v => arr.push(v))
        return removed
    }

    // 改变原始数组以过滤出指定的值,返回删除的元素 改变原有数组
    viper.pullAtValue = (arr, pullArr) => {
        let removed = [],
            pushToRemove = arr.forEach((v, i)=> (pullArr.includes(v) ? removed.push(v) : v)),
            mutateTo = arr.filter((v,i) => !pullArr.includes(v));
        arr.length = 0
        mutateTo.forEach(v => arr.push(v))
        return removed
    }
    // 根据条件过滤一个对象数组，同时过滤未指定的键
    viper.reducedFilter = (data, keys, fn) => data.filter(fn).map(el => keys.reduce((acc, key) => {
        acc[key] = el[key]
        return acc
    }, {}))

    //  返回重新洗牌后的新数组
    viper.shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr
    }
    // 获取数组交集
    viper.similarity = (arr, values) => arr.filter(v => values.includes(v))

    // 返回两个数组之间的对称差异
    viper.symmetricDifference = (a, b) => {
        const sA = new Set(a), 
            sB = new Set(b);
        return [...a.filterx(x => !sB.has(x)), ...b.filter(x => !sA.has(x))]
    }

    // 返回数组中除第一个元素外的所有元素
    viper.tail = arr => (arr.length > 1 ? arr.slice(1) : arr)


    // 返回从头开始删除n个元素的数组
    viper.take = (arr, n = 1) => arr.slice(0 ,n)

    // 返回从最后删除n个元素的数组
    viper.takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length)

    // 返回数组合集
    viper.union = (a ,b) => Array.from(new Set([...a, ...b]))

    // 创建一个排除所有给定值的数组
    viper.without = (arr, ...args) => arr.filter(v => args.indexOf(v) === -1)

    // 根据原始数组中的位置进行分组创建新的数组 如果参数数组的长度不一致，那么在未找到值的地方使用undefined
    viper.zip = (...arrays) => {
        const maxLength = Math.max(...arrays.map(x => x.length));
        return Array.from({length : maxLength}).map((_, i) => {
            return Array.from({length : arrays.length}, (_, k) => arrays[k][i])
        })
    }
    // 给定一组有效的属性标识符和一个值数组，返回一个将属性关联到值的对象,未找到值的地方使用undefined
    /*
        zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
    */
    viper.zipObject = (props, values) => props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {})

    // 求数字数组的平均数
    viper.average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length
    


    // Browser
    // ----------------
    

    // 复制字符串到剪贴板
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

    // 返回当前页面的滚动位置
    viper.getScrollPosition = (el = window) =>({
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    })

    // 返回指定元素的CSS规则的值
    viper.getStyle = (el, ruleName) => getComputedStyle(el)[ruleName]

    // 元素是否含有某个类
    viper.hasClass = (el, className) => el.classList.contains(className)

    // 隐藏指定的所有元素
    viper.hide = (...el) => [...el].forEach( e => (e.style.display = 'node'))

    // 滚动到页面顶部
    viper.scrollToTop  = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop
        if(c > 0){
            window.requestAnimationFrame(scrollToTop)
            window.scrollTo(0, c - c / 8)
        }
    }
    // 设置元素的css样式
    /**
     * 
     * @param {元素} el 
     * @param {样式名} ruleNmae 
     * @param {样式值} val 
     */
    viper.steStyle = (el, ruleNmae, val) =>{ el.style[ruleNmae] = val }

    // 显示所有置顶元素 参数为数组
    viper.show = (...el) => [...el].forEach(e.style.display = '')

    // 切换元素类名
    viper.toggleClass = (el, className) => el.classList.toggleClass(className)


    // Function 函数
    // ----------------


    // 执行一次函数
    viper.once = fn => {
        let called = false;
        return function(...args){
            if(called) return
            called = true
            return fn.call(this, args)
        }
    }
    // 防抖
    /**
     * 
     * @param { 函数 } func 
     * @param { 时间 } wait 
     * @param { 是否立即执行 } immediate 
     */
    viper.debounce = (func, wait, immediate) =>{
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
            if (callNow) result = func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
        return result;
    }
    
    }


    // Math
    // ----------------

    // 阶乘
    viper.factorial = n => n <= 1 ? 1 : n * factorial(n - 1) 

    // 最大公约数
    viper.gcd = (x, y) => !y ? x : gcd(y, x % y)

    // 是否在指定范围内
    viper.inRange = (n, start, end = null) => {
        if(end && start > end) end = [start, (start = end)][0]
        return end == null ? n >= 0 && n < start : n >= start && n < end 

    }

    // 数值2能否否能整除数值1
    viper.isDivisible = (first, second) => second % first === 0

    // 随机获取指定范围内的整数
    viper.randomIntegerInRange = (min, max) => Math.floor(Math.random() * ( max - min + 1)) + min

    // 随机获取指定范围内的小数
    viper.randomNumberInRange = (min, max) => Math.random() * (max - min) + min

    // 返回指定位数的小数，省略第二个参数 四舍五入为整数
    viper.round = (n, decimals=0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);


    // Object
    // ----------------


    // 从对象中挑选与给定键对应的键值对
    viper.pick = (obj, arr) => arr.reduce((acc, curr)=> (curr in obj && (acc[curr] = obj[curr]), acc), {})

    // 删除指定属性外的其他属性
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
    // 反转key和value
    viper.invertKeyValues = obj => Object.keys(obj).reduce((acc, key)=> {
        acc[obj[key]] = key
        return acc
    },{})

    // 小写所有key
    viper.lowercaseKeys = obj => Object.keys(obj).reduce((acc, key)=> {
        acc[key.toLowerCase()] = obj[key]
        return acc
    },{})

    // 合并两个或者多个对象
    viper.merge = (...objs) => [...objs].reduce(
        (acc, obj) => Object.keys(obj).reduce(
            (a, k) => {
                 acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
                 return acc
            },{}),
        {}
    )

    // 获取对象、数组、字符串的大小
    viper.size = val => Array.isArray(val) ? val.length : val && typeof val === 'object' ? val.size || val.length || Object.keys(val).length : typeof val === 'string' ? new Blob([val]).size : 0

    
    // String 字符串
   // ----------------


   // 将数值字符串转换成数组
   viper.digitize = n => [...`${n}`].map(i => parseInt(i))
   
    // 生成一个字符串所有的排列组合
    viper.anagrams = str => {
        if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : str
        return str.split('').reduce((acc, letter, i) => acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
    }

    // 返回字节大小
    viper.byteSize = str => new Blob([val]).size

    // 首字母大写 
    /**
     * 
     * @param { 字符串 } param0 
     * @param { 是否改变剩余字符为小写 默认为false } lowerRest 
     */
    viper.Capitalize = ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))

    // 大写单词的每个首字母
    viper.capitalizeEveryWord = str => str.replace(/\d[a-z]/g, char => char.toUpperCase())

    //首字母小写
    /**
     * 
     * @param { 字符串 } param0 
     * @param { 是否改变剩余字符为大写 默认为false } lowerRest 
     */
    viper.decapitalize = ([first, ...rest], upperRest = false) => first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
    

    // 转义HTML
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
    
    // 将驼峰字符改成字符串
    /** 
     * 
     * @param { 字符串 } str 
     * @param { 分隔符 默认为 _} separator 
     */
    viper.fromCamelCase = (str, separator = '_') => str.replace(/([a-z\d])(A-Z)/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase()

    // 用指定的字符替换除最后指定个字符以外的所有字符
    /**
     * 
     * @param { 字符 } str 
     * @param { 保留个数， 倒数默认为4 } num 
     * @param { 替换字符 默认为* } mask 
     */
    viper.mask = (str, num = 4, mask = '*') => {
        return ('' + str).slice(0, -num).replace(/./g, mask) + ('' + str).slice(-num)
    }

    // 检查回文
    viper.palindrome = (str) => {
        const s = str.toLowerCase().replace(/[\W_]/g, '')
        return (
            s === s.split().reverse().join('')
        )
    }

    // 反转字符串
    viper.reverseString = (str) => [...str].reverse().join('')

    // 按字母顺序排列字符串中的字符
    viper.sortString = (str) => [...str].sort((a, b) => a.localeCompare(b)).join('')
    
    // 将字符串改为驼峰字符串
    viper.toCamelCase = (str) => {
        let s = 
            str && 
            str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
        return s.slice(0, 1).toLowerCase() + s.slice(1)
    }

    // 截断字符串在后面添加... 
    /**
     * 
     * @param { 字符串 } str 
     * @param { 保留的位数 大于3的时候包含...} num 
     */
    viper.truncateString = (str, num) => {
        return str.length > num ? str.slice(0, num > 3 ? num -3 : num) + '...' : str
    }

    // 反转义HTML字符串
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


    // type 类型
    // ----------------

    
    // 校验字符是否是json
    viper.isValidJSON = obj => {
        try {
            JSON.parse(obj)
        } catch (e) {
            return false
        }
    }
    
    // 获取类型 undefined、null、NaN 直接返回 其他返回小写的构造函数的名称
    viper.getType = v => v !== v ? 'NaN' : v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()


    // Utility 使用函数
    // ----------------
    
    // 返回第一个非null非undefined的值
    viper.coalesce = (...args) => args.find( _ => ![undefined, null].includes(_))

    // 返回第一个符合过滤函数的值
    viper.coalesceFactory = valid => (...args) => args.find(valid)

    // 将3位数的hex颜色值转换成6为数的值
    viper.extendHex = shortHex => '#' + shortHex.slice(shortHex.startsWith('#') ? 1 : 0).split('').map(x => x + x ).join('')

    // 返回对象包含url上的参数
    viper.getURLParams = url => url.match(/([^?=&]+)(=([^&]*))/g).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1 )),a), {}
    )

    // hex转rgb
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

    // 随机生成hex颜色值
    viper.randomHexCode = () => {
        let n = ((Math.random() * 0xfffff) | 0).toString(16)
        return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n)
    }

    // RGB转hex色值
    viper.RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0')


    //  返回函数运行时长
    viper.timeTaken = callback => {
        console.time('timeTaken')
        const cb = callback()
        console.timeEnd('timeTaken')
        return cb
    }
    
    // 使用crypto API 生成UUID 符合RFC4122 版本 4
    viper.uuid = () => {
       return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    }

    // 邮箱验证
    viper.validEmail = str => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)

    viper.mixin = function(obj){
        viper.each(viper.functions(obj), function(name){
            var func = viper[name] = obj[name];
            viper.prototype[name] = function() {
                var args = [this._wrapped]
                push.apply(args, arguments)
                return func.apply(viper, args)
            }
        })
        return viper
    }

    viper.mixin(viper)
})()
