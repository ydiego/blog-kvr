## blog
- server: koa2 + mysql + Sequelize
- admin: vue-cli3
- web: create-react-app + typescript

### run
```
// serer: 
yarn start
```
```
//admin:
cd admin & yarn serve | yarn build
```
```
//web:
cd app & yarn start | yarn build
```

### config file 

/config/index.js // some server config such like database 、 token

/app/.env // blog name and github address

### todo
- [x] server build
- [x] admin build
- [x] web build
- [x] article api
- [x] tag api
- [x] admin article 
- [x] admin tag
- [x] cloud serve publish
- [ ] refactor api use
- [ ] article timeline
- [ ] admin user
- [x] admin login
- [x] admin register
- [ ] admin user pwd manger
- [x] user api login registe
- [x] api auth
- [x] web article detail
- [ ] old blog article migrate
- [ ] error catch
- [ ] script shell
- [x] file upload
- [ ] create table visual ?
- [ ] use graphQL