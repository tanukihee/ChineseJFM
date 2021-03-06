-- Chinese JFM for Traditional Chinese fonts (zh_TW)
-- v1.1.1, 2021/02/15
-- Copyright (c) 2020 -- 2021 ListLee.

local is_vt, is_qj, is_bj, is_km

if luatexja.jfont.jfm_feature then
    is_vt = luatexja.jfont.jfm_feature.vert
    is_qj = luatexja.jfont.jfm_feature.quanjiao
    is_bj = luatexja.jfont.jfm_feature.banjiao
    is_km = luatexja.jfont.jfm_feature.kaiming
end

if
    not ((is_qj and not (is_bj or is_km)) or (is_bj and not (is_qj or is_km)) or
        (is_km and not (is_qj or is_bj)))
 then
    tex.error(
        'You must specify ONLY ONE feature among "quanjiao", "banjiao" and ' ..
            '"kaiming"'
    )
end

local function aki(wd, pr, km)
    -- 插入空白量
    local p = pr or 0
    return km and
        (is_bj and {0, wd, 0, priority = {p, -p}} or
            {wd, 0, wd, priority = {p, -p}}) or
        (is_qj and {wd, 0, wd, priority = {p, -p}} or
            {0, wd, 0, priority = {p, -p}})
end

luatexja.jfont.define_jfm {
    version = 3,
    dir = is_vt and 'tate' or 'yoko',
    zw = 1,
    zh = 1,
    kanjiskip = {0.0, 0.25, 0},
    xkanjiskip = {0.25, 0.25, .125},
    [0] = {
        align = 'middle',
        left = 0,
        down = 0,
        width = 1,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [1] = aki(0.5, -1),
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, 1, true)
        },
        round_threshold = 0.01
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
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, 1, true)
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
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [0] = aki(0.5, -1),
            [1] = aki(0.5, -1),
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, 1, true),
            [5] = aki(0.25, -1),
            [51] = aki(0.25, -1),
            [52] = aki(0.25, -1)
        }
    },
    [21] = {
        -- 逗号、顿号
        chars = {'、', '，'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 0.5,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [0] = aki(0.25),
            [1] = aki(0.25),
            [2] = aki(0.25),
            [21] = aki(0.5),
            [22] = is_vt and aki(0.5) or aki(0.25),
            [3] = aki(0.5, -1),
            [4] = is_qj and {0.5, 0, 0.5, priority = {1, -1}} or
                (is_bj and {0, 0.5, 0, priority = {1, -1}} or
                    {0.25, 0.25, 0.25, priority = {1, -1}}),
            [41] = aki(0.25),
            [5] = aki(0.25),
            [51] = aki(0.25),
            [52] = aki(0.25),
            [6] = aki(0.25)
        }
    },
    [22] = {
        -- 冒号、分号
        chars = {'：', '；'},
        align = 'middle',
        left = 0,
        down = 0,
        width = is_vt and 1 or 0.5,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [0] = is_vt and {} or aki(0.25),
            [1] = is_vt and {} or aki(0.25),
            [2] = is_vt and {} or aki(0.25),
            [21] = is_vt and aki(0.25) or aki(0.5),
            [22] = is_vt and {} or aki(0.5),
            [3] = is_vt and aki(0.25, -1) or aki(0.5, -1),
            [4] = is_vt and aki(0.25, 1, true) or
                (is_qj and {0.5, 0, 0.5, priority = {1, -1}} or
                    (is_bj and {0, 0.5, 0, priority = {1, -1}} or
                        {0.25, 0.25, 0.25, priority = {1, -1}})),
            [41] = is_vt and {} or aki(0.25),
            [5] = is_vt and {} or aki(0.25),
            [51] = is_vt and {} or aki(0.25),
            [52] = is_vt and {} or aki(0.25),
            [6] = is_vt and {} or aki(0.25)
        }
    },
    [3] = {
        -- 间隔号
        chars = {'・', '·'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 0.5,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [0] = aki(0.25, -1),
            [1] = aki(0.25, -1),
            [2] = aki(0.25, -1),
            [21] = aki(0.5, -1),
            [22] = is_vt and aki(0.25, -1) or aki(0.5, -1),
            [3] = aki(0.5, 1),
            [4] = is_qj and {0.5, 0, 0.5, priority = {1, -1}} or
                (is_bj and {0, 0.5, 0, priority = {1, -1}} or
                    {0.25, 0.25, 0.25, priority = {1, -1}}),
            [41] = aki(0.25, -1),
            [5] = aki(0.25, -1),
            [51] = aki(0.25, -1),
            [52] = aki(0.25, -1),
            [6] = aki(0.25, -1)
        }
    },
    [4] = {
        -- 句号
        chars = {'。', '．'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 0.5,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [0] = aki(0.25, 1, true),
            [1] = aki(0.25, 1, true),
            [2] = aki(0.25, 1, true),
            [21] = aki(0.5, 1, true),
            [22] = is_vt and aki(0.25, 1, true) or aki(0.5, 1, true),
            [3] = is_qj and {0.5, 0, 0.5, priority = {1, -1}} or
                (is_bj and {0, 0.5, 0, priority = {1, -1}} or
                    {0.25, 0.25, 0.25, priority = {1, -1}}),
            [4] = is_qj and {0.5, 0, 0.5, priority = {1, -1}} or
                (is_bj and {0, 0.5, 0, priority = {1, -1}} or
                    {0.25, 0.25, 0.25, priority = {1, -1}}),
            [41] = aki(0.25, 1, true),
            [5] = aki(0.25, 1, true),
            [51] = aki(0.25, 1, true),
            [52] = aki(0.25, 1, true),
            [6] = aki(0.25, 1, true)
        }
    },
    [41] = {
        -- 问号、感叹号
        chars = {'？', '！', '‼', '⁇', '⁈', '⁉'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 1,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, 1, true)
        }
    },
    [5] = {
        -- 一字线、省略号、波浪线
        chars = {
            '—', -- U+2014
            '―', -- U+2015
            '‥',
            '…',
            '〜', -- U+301C
            '～' -- U+FF5E
        },
        align = 'middle',
        left = 0,
        down = 0,
        width = 1,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [1] = aki(0.5, -1),
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, -1, true)
        },
        kern = {
            [5] = 0,
            [51] = 0,
            [52] = 0
        }
    },
    [51] = {
        -- U+2E3A TWO-EM DASH
        chars = {'⸺'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 2,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [1] = aki(0.5, -1),
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, -1, true)
        },
        kern = {
            [5] = 0,
            [51] = 0,
            [52] = 0
        }
    },
    [52] = {
        -- U+2E3B THREE-EM DASH
        chars = {'⸻'},
        align = 'middle',
        left = 0,
        down = 0,
        width = 3,
        height = is_vt and 0.5 or 0.88,
        depth = is_vt and 0.5 or 0.12,
        italic = 0,
        glue = {
            [1] = aki(0.5, -1),
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, -1, true)
        },
        kern = {
            [5] = 0,
            [51] = 0,
            [52] = 0
        }
    },
    [6] = {
        -- box end
        chars = {'boxbdd', 'parbdd', 'glue'},
        glue = {
            [21] = aki(0.25),
            [22] = is_vt and {} or aki(0.25),
            [3] = aki(0.25, -1),
            [4] = aki(0.25, 1, true)
        }
    }
}
