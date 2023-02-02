# sanity.io
npm create sanity@latest -- --coupon javascriptmastery2022
npx sanity manage 会跳到 https://www.sanity.io/manage/personal/project/yo5mx0hn

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