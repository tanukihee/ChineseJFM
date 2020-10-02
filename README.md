# luatexja 使用的中文 JFM 文件

为 luatexja 编写的中文 JFM 文件，提供全角（qj）、半角（bj）、开明（km）三种风格，适用于简（s）繁（t）中文及日文字体（j）标点的横（h）直（v）排。

## 挤压顺序

该 JFM 文件中同时增加了 `priority` 的设置，配合 luatexja-adjust 包，可以进行有优先顺序的标点挤压。挤压顺序如下：

* 最优先挤压引号、括号前后与间隔号两边的空格；

* 其次挤压顿号、逗号、冒号、分号后的空格；

* 最后挤压句号、问号、叹号后的空格。

* 如果进行上述挤压后，仍无法达到行长要求，最后才会进行字间字距调整。

\**注：以上对标点空白的描述是针对于简体中文的。对于标点置中的繁体中文，以上调整顺序仍然适用。但此时除括号外，可调整的空白变为标点两边的空白。全宽标点无空白可调整的，不作调整。*

以上挤压规则是针对于全角风格的标点调整。对于半角与开明这种标点风格，若以「挤压」理解，顺序仍相同，但直观性就有所欠缺。事实上，JFM 文件中的标点是沿袭铅字与 InDesign 的习惯，认为标点只占半宽，全宽标点是半宽标点加上半宽空格的结果。因此上述规则在半宽标点的前提下应描述为：

* 最先给句号、问号、叹号插空；

* 其次添加顿号、逗号、冒号、分号后空格；

* 最后调整引号、括号前后与间隔号两边的空格；

* 如果进行上述调整后，仍无法达到行长要求，最后才会进行字间字距调整。

「加法式」的标点调整，更加直观，也更容易理解。

## JFM 特性

luatexja 可以使用 `/` 来调用 JFM 特性。在北川宏典先生的 [fork 版本](https://github.com/h-kitagawa/ChineseJFM/tree/combine)中，他将全角、半角、开明三种风格以特性方式封装在了一个 JFM 文件之中，从而精简 JFM 文件数量，并方便调用。

本仓库中的简中直排 JFM 中封装了 `hwColon` 特性，可以适用于部分直排中冒号、分号只占半宽的字体。
