var
    path = require('path'),
    beRoot = path.resolve(__dirname, '..'),
    config = {
        host: 'localhost',
        port: 3001,
        url: 'http://www.blog.com/',
        doc_content: {
            title: 'q blog'
        },
        cookieSession: { // session
            name: 'blog',
            keys: ["Mo's Blog"]
        },
        db: { // 数据库配置
            uri: 'mongodb://localhost:27017/blog',
            opts: {
                user: '',
                pass: ''
            }
        },
        dir: { // 目录配置
            root: beRoot,
            model: path.resolve(beRoot, 'models'),
            controller: path.resolve(beRoot, 'controllers'),
            resource: path.resolve(beRoot, '../fe/resource')
        },
        resourceFixUrl: 'http://localhost:3004', // 静态资源web访问修正路径
        exceptFolder: 'except' // model 和 controller 中read dir排除的目录名称
    };

module.exports = config;