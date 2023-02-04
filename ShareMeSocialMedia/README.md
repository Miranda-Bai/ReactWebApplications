# sanity.io
npm create sanity@latest -- --coupon javascriptmastery2022
npx sanity manage 会跳到 https://www.sanity.io/manage/personal/project/yo5mx0hn
The query API is located on https://<projectId>.api.sanity.io/v2021-06-07/data/query/<dataset>
query:  *[_type == "user" && _id == '100059572459129725887']

https://zp7mbokg.api.sanity.io/v2021-06-07/data/query/production?query=*[0]

npx create-react-app ./
用当前的文件夹作为项目根目录，当前文件夹名为项目名
# backend
在backend文件夹中
npx sanity manage 
可以去到sanity的控制台用github登陆

# fronted
npm install @sanity/client @sanity/image-url react-google-login --legacy-peer-deps react-icons react-loader-spinner react-masonry-css react-router-dom nanoid

## err = {error: "popup_closed_by_user"}
https://www.npmjs.com/package/@react-oauth/google
Google OAuth2 using the new Google Identity Services SDK for React @react-oauth/google
npm install @react-oauth/google@latest jwt-decode
jwt-decode用于解析credential来获取用户信息

## [GSI_LOGGER]: The given origin is not allowed for the given client ID.
http://localhost
Add both http://localhost and http://localhost:<port_number> to the Authorized JavaScript origins box for local tests or development.
google授权登陆后返回的信息
```
aud: "92509620942-ubbeo1d2rf83fgfvkg2iarpohp2238sc.apps.googleusercontent.com"
azp: "92509620942-ubbeo1d2rf83fgfvkg2iarpohp2238sc.apps.googleusercontent.com"
email: "mirandapass0315@gmail.com"
email_verified: true
exp: 1675390141
family_name: "silver"
given_name: "yingzi"
iat: 1675386541
iss: "https://accounts.google.com"
jti: "f4cd158840c785b35ab4cf93c105caecba533f17"
name: "yingzi silver"
nbf: 1675386241
picture: "https://lh3.googleusercontent.com/a/AEdFTp6jO-HDAwCAVapf2GDd69a9tIqkJfKrXkUm1qzk=s96-c"
sub: "100059572459129725887"
```
# js中??和?.的意思
## 空值合并操作符（??）

　　只有当左侧为null和undefined时，才会返回右侧的数

　　空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。

　　与逻辑或操作符（||）不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，'' 或 0）时。见下面的例子。

```const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
const nullValue = null;
const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
const someNumber = 42;

const valA = nullValue ?? "valA 的默认值";
const valB = emptyText ?? "valB 的默认值";
const valC = someNumber ?? 0;

console.log(valA); // "valA 的默认值"
console.log(valB); // ""（空字符串虽然是假值，但不是 null 或者 undefined）
console.log(valC); // 42
```
## 可选链操作符( ?. )

　　可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值

```const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```
语法：obj?.prop   obj?.[expr]   arr?.[index]    func?.(args)
函数调用：
`let result = someInterface.customMethod?.();`
如果希望允许 someInterface 也为 null 或者 undefined ，那么你需要像这样写 `someInterface?.customMethod?.()`
可选链与表达式： 
`let nestedProp = obj?.['prop' + 'Name'];`
可选链访问数组：
`let arrayItem = arr?.[42];`
例子：
    ```let myMap = new Map();
    myMap.set("foo", {name: "baz", desc: "inga"});

    let nameBar = myMap.get("bar")?.name;
```   
    在一个不含 bar 成员的 Map 中查找 bar 成员的 name 属性，因此结果是 undefined。
短路计算：
```let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // x 将不会被递增，依旧输出 0
```

当在表达式中使用可选链时，如果左操作数是 null 或 undefined，表达式将不会被计算
连用可选链操作：
```let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls" // details 的 address 属性未有定义
  }
};
let customerCity = customer.details?.address?.city;

// … 可选链也可以和函数调用一起使用
let duration = vacations.trip?.getTime?.();
空值合并操作符可以在使用可选链时设置一个默认值：

let customer = {
  name: "Carl",
  details: { age: 82 }
};

let customerCity = customer?.city ?? "暗之城";
console.log(customerCity);  // “暗之城”
```
# a标签跳转地址会在前边自动加上当前域名
原因是要跳转的域名没有写完整，需要加上协议，如要跳转到百度就是：

正确写法：href="http://www.baidu.com"

错误写法：href="www.baidu.com"

# Get a random photo from unsplash
https://api.unsplash.com/photos/random/?client_id=ACCESS_ID

https://source.unsplash.com/1600x900/?nature