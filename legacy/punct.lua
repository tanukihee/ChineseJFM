-- The enum of punctuations of chinese-jfm
-- v2.0.0, 2022/xx/xx
-- Copyright (c) 2020 -- 2022 ListLee.

local punct = {
    -- 汉字
    IDEOGRAPH = 0,
    -- 逗号、顿号
    COMMA = 1,
    -- 句号
    PERIOD = 2,
    -- 冒号、分号
    COLON = 3,
    -- 开括号
    OPEN_PAREN = 4,
    -- 闭括号
    CLOSE_PAREN = 5,
    -- 开引号
    OPEN_QUOTE = 6,
    -- 闭引号
    CLOSE_QUOTE = 7,
    -- 中点
    MIDDLE_DOT = 8,
    -- 问号
    QUESTION_MARK = 9,
    -- 感叹号
    EXCLAMATION_MARK = 10,
    -- 复合问号/感叹号
    COMPOSED_MARK = 11,
    -- 连接号
    DASH = 12,
    -- 二字破折号
    TWO_EM_DASH = 13,
    -- 三字破折号
    THREE_EM_DASH = 14,
    -- 假想字符
    BOX = 15,
}

return punct
