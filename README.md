# __IDE_snippet
适配VS Code代码编辑器 snippet 代码片段收集

> 使用方法: 下载该项目,拷贝`snippet_file`目录下所有文件到本地磁盘`C:\Users\你的名字\AppData\Roaming\Code\User\snippets`目录下, 不需重启, 直接使用

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
 

<span style="font-size: 16px; font-weight: 600" id="ccc">ccc</span>

```
console.log("")

```

<span style="font-size: 16px; font-weight: 600" id="forcc">forcc</span>

```
for(let i = 0; i < 10; i++) {
    
}
```

<span style="font-size: 16px; font-weight: 600" id="middleimgcc">middleimgcc</span>

```
for(let i = 0; i < 10; i++) {
    
}
```

<span style="font-size: 16px; font-weight: 600" id="modulecc">modulecc</span>

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

<span style="font-size: 16px; font-weight: 600" id="textovercc">textovercc</span>

```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

<span style="font-size: 16px; font-weight: 600" id="vuecc">vuecc</span>

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


