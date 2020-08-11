luatexja.jfont.define_jfm {
    dir = 'tate',
    zw = 1,
    zh = 1,
    [0] = {
        align = 'left',
        left = 0,
        down = 0,
        width = 1,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [1] = {0, 0.5, 0, priority = -1},
            [201] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1}
        }
    },
    [1] = {
        -- 开括号
        chars = {
            '‘',
            '“',
            '〈',
            '《',
            '「',
            '『',
            '【',
            '〔',
            '〖',
            '〘',
            '〝',
            '（',
            '［',
            '｛',
            '｟'
        },
        align = 'right',
        left = 0,
        down = 0,
        width = 0.5,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [201] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1}
        }
    },
    [2] = {
        -- 闭括号
        chars = {
            '’',
            '”',
            '〉',
            '》',
            '」',
            '』',
            '】',
            '〕',
            '〗',
            '〙',
            '〞',
            '〟',
            '）',
            '］',
            '｝',
            '｠'
        },
        align = 'left',
        left = 0,
        down = 0,
        width = 0.5,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [0] = {0, 0.5, 0, priority = -1},
            [1] = {0, 0.5, 0, priority = -1},
            [201] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1},
            [5] = {0, 0.25, 0, priority = -1},
            [501] = {0, 0.25, 0, priority = -1},
            [502] = {0, 0.25, 0, priority = -1}
        }
    },
    [201] = {
        -- 逗号、顿号
        chars = {'、', '，'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 0.5,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [0] = {0, 0.25, 0},
            [1] = {0, 0.25, 0},
            [2] = {0, 0.25, 0},
            [201] = {0, 0.5, 0},
            [202] = {0, 0.25, 0},
            [3] = {0, 0.5, 0, priority = -1},
            [4] = {0.25, 0.25, 0.25, priority = 1},
            [401] = {0, 0.25, 0},
            [5] = {0, 0.25, 0},
            [501] = {0, 0.25, 0},
            [502] = {0, 0.25, 0}
        }
    },
    [202] = {
        -- 冒号、分号
        chars = {'：', '；'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 1,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [201] = {0, 0.25, 0},
            [202] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1}
        }
    },
    [3] = {
        -- 间隔号
        chars = {'・', '·'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 0.5,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [0] = {0, 0.25, 0, priority = -1},
            [1] = {0, 0.25, 0, priority = -1},
            [2] = {0, 0.25, 0, priority = -1},
            [201] = {0, 0.5, 0},
            [202] = {0, 0.25, 0},
            [3] = {0, 0.5, 0, priority = -1},
            [4] = {0.25, 0.25, 0.25, priority = 1},
            [401] = {0, 0.25, 0},
            [5] = {0, 0.25, 0},
            [501] = {0, 0.25, 0},
            [502] = {0, 0.25, 0}
        }
    },
    [4] = {
        -- 句号
        chars = {'。', '．'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 0.5,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [0] = {0.25, 0, 0.25, priority = 1},
            [1] = {0.25, 0, 0.25, priority = 1},
            [2] = {0.25, 0, 0.25, priority = 1},
            [201] = {0.25, 0.25, 0.25, priority = 1},
            [202] = {0.25, 0, 0.25, priority = 1},
            [3] = {0.25, 0.25, 0.25, priority = 1},
            [4] = {0.25, 0.25, 0.25, priority = 1},
            [401] = {0.25, 0, 0.25, priority = 1},
            [5] = {0.25, 0, 0.25, priority = 1},
            [501] = {0.25, 0, 0.25, priority = 1},
            [502] = {0.25, 0, 0.25, priority = 1}
        }
    },
    [401] = {
        -- 问号、感叹号
        chars = {'？', '！', '‼', '⁇', '⁈', '⁉'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 1,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [201] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1}
        }
    },
    [5] = {
        -- 一字线、省略号、波浪线
        chars = {
            '—', -- U+2014
            '―', -- U+2015
            '‥',
            '…',
            '～', -- U+FF5E
            '〜' -- U+301C
        },
        align = 'middle',
        left = 0,
        down = 0,
        width = 1,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [1] = {0, 0.5, 0, priority = -1},
            [201] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1}
        },
        kern = {
            [5] = 0,
            [501] = 0,
            [502] = 0
        }
    },
    [501] = {
        -- U+2E3A TWO-EM DASH
        chars = {'⸺'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 2,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [1] = {0, 0.5, 0, priority = -1},
            [201] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1}
        },
        kern = {
            [5] = 0,
            [501] = 0,
            [502] = 0
        }
    },
    [502] = {
        -- U+2E3B THREE-EM DASH
        chars = {'⸻'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 3,
        height = 0.5,
        depth = 0.5,
        italic = 0,
        glue = {
            [1] = {0, 0.5, 0, priority = -1},
            [201] = {0, 0.25, 0},
            [3] = {0, 0.25, 0, priority = -1},
            [4] = {0.25, 0, 0.25, priority = 1}
        },
        kern = {
            [5] = 0,
            [501] = 0,
            [502] = 0
        }
    },
    [6] = {
        -- box end
        chars = {'boxbdd', 'parbdd', 'glue'}
    }
}
