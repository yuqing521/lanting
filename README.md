# Lanting

Palette: #F4E285 #F4A259 #7A4419 #755C1B

orig, 可以没有

- 把 joplin 插件代码找到
- 还是存到本地不变, 路径变一下, 文件名变一下只需要 ID. ID 哪里来? 去 repo 查. 不要打本地, 打接口, 然后本地 pull 吧
- 从第一行解析出标题, 试图解析出 metadata, 解析最后 metadata 里有用的部分. 建对应的 orig 和 comment. 通过 ID 来对应. 有了就不建, 等于是补全
- 上传源文件到 OSS. repo 里也存一份只用来存档, 来判断有没有, 页面直接拼 URL -> 可以!

compile-archives

- 产出一个 json, metadata
- 实际丰富的数据主要去实际.md 里面找
