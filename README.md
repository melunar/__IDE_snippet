# __IDE_snippet
适配VS Code代码编辑器 snippet 代码片段收集

> 使用方法: 下载该项目,拷贝`snippet_file`目录下所有文件到本地磁盘  
【windows：`C:\Users\你的名字\AppData\Roaming\Code\User\snippets`】  
【macOs：`~/Library/Application\ Support/Code/User/snippets/test.code-snippets`】目录下, 不需重启, 直接使用

## macOS：命令部署方法

`git clone git@github.com:melunar/__IDE_snippet.git`

`cd ./__IDE_snippet`

`npm i // 初始化环境`

`git pull origin master // 如果需要 更新仓库`  

`npm run clear:mac // 如果需要 先清除本地snippet（慎重）`

`npm run deploy:mac // 同步到本地snippet`


## 命令手册

### javascript系列

| 命令 | 描述 | 代码示例 |
| - | :-: | -: |
| ccc | 控制台打印 | [点击链接](#ccc) |
| forcc | for循环 | [点击链接](#forcc) |
| modulecc | es6模块定义 | [点击链接](#modulecc) |

### styleless样式表系列

| 命令 | 描述 | 代码示例 |
| - | :-: | -: |
| middleimgcc | 图片自适应<br>水平垂直居中 | [点击链接](#middleimgcc) |
| textovercc | 文本超出省略号显示 | [点击链接](#textovercc) |

### vue系列

| 命令 | 描述 | 代码示例 |
| - | :-: | -: |
| vuecc | vue文件模板 | [点击链接](#vuecc) |
 
### **示例**

#### [ccc]()

```
console.log("")

```

#### [forcc]()

```
for(let i = 0; i < 10; i++) {
    
}
```

#### [middleimgcc]()

```
for(let i = 0; i < 10; i++) {
    
}
```

#### [modulecc]()

```
/* parent */
display: inline-block; 
height: 10px;
line-height: 10px;
text-align: center;
/* sub */
vertical-align: middle;
max-width: 100%;
max-height: 100%;
```

#### [textovercc]()

```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

#### [vuecc]()

```
<template>
<div class='main'>
    div.main
</div>
</template>
<script>
// import xxx from '../xxx.vue'
// var xx = require('../xx.js')
export default {
    name: 'name',
    mixins: [],
    props: {
    name: {
        type: Array,
        default: function() {
            return [];
        }
    }
    },
    data: function() {
        return {};
    },
    components: {
        requireDemo: function (resolve) {
            require([''], resolve);
        }
    },
    created: function() {},
    mounted: function() {},
    beforeDestroy: function() {},
    computed: {},
    watch: {},
    methods: {}
};
</script>
<style scoped lang='less'>
//@import '../less/variables.less';
//@import '../less/sprite.less';
.main {}
</style>
```


