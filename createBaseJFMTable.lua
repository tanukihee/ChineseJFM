-- Create the base JFM table for Chinese JFM
-- v2.0.0, 2022/xx/xx
-- Copyright (c) 2020 -- 2022 ListLee.
local function createBaseJFMTable()
    --- 基础 JFM 表
    local baseJFMTable = {
        version = 3,
        -- dir = is_vt and 'tate' or 'yoko',
        zw = 1,
        zh = 1,
        kanjiskip = {0.0, 0.25, 0},
        xkanjiskip = {0.25, 0.25, 0.125},
        [0] = {
            align = 'left',
            left = 0,
            down = 0,
            width = 1,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [1] = aki(0.5, -1),
                --     [10] = aki(0.5, -1),
                --     [3] = aki(0.25, -1)
            },
            round_threshold = 0.01,
        },
        [1] = {
            -- 开括号
            chars = {'〈', '《', '「', '『', '【', '〔', '〖', '〘', '〝', '（', '［', '｛', '｟'},
            --   align = is_fz and 'middle' or 'right',
            --   left = 0,
            --   down = 0,
            width = 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [3] = aki(0.25, -1)
            },
        },
        [10] = {
            -- 开引号
            chars = {'‘', '“'},
            --   align = is_vt and (is_fz and 'middle' or 'right') or 'right',
            --   left = 0,
            --   down = 0,
            width = 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            --   glue = {
            --     [3] = aki(0.25, -1)
            --   }
        },
        [2] = {
            -- 闭括号
            chars = {'〉', '》', '」', '』', '】', '〕', '〗', '〙', '〞', '〟', '）', '］', '｝', '｠'},
            --   align = is_fz and 'middle' or 'left',
            --   left = 0,
            --   down = 0,
            width = 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            --   glue = {
            --     [0] = aki(0.5, -1),
            --     [1] = aki(0.5, -1),
            --     [10] = aki(0.5, -1),
            --     [3] = aki(0.25, -1),
            --     [5] = aki(0.5, -1),
            --     [51] = aki(0.5, -1),
            --     [52] = aki(0.5, -1)
            --   }
        },
        [20] = {
            -- 闭引号
            chars = {'’', '”'},
            --   align = is_vt and (is_fz and 'middle' or 'left') or 'left',
            --   left = 0,
            --   down = 0,
            width = 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            --   glue = {
            --     [0] = aki(0.5, -1),
            --     [1] = aki(0.5, -1),
            --     [10] = aki(0.5, -1),
            --     [3] = aki(0.25, -1),
            --     [5] = aki(0.5, -1),
            --     [51] = aki(0.5, -1),
            --     [52] = aki(0.5, -1)
            --   }
        },
        [3] = {
            -- 逗号、顿号
            chars = {'、', '，'},
            --   align = 'left',
            --   left = 0,
            --   down = 0,
            width = 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [0] = aki(0.5),
                --     [1] = aki(0.5),
                --     [10] = aki(0.5),
                --     [3] = aki(0.5),
                --     [5] = aki(0.5),
                --     [51] = aki(0.5),
                --     [52] = aki(0.5)
            },
        },
        [4] = {
            -- 冒号、分号
            chars = {'：', '；'},
            --   align = 'left',
            --   left = 0,
            --   down = 0,
            --   width = is_vt and (is_hc and 0.5 or 1) or 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [0] = is_vt and (is_hc and aki(0.5) or {}) or aki(0.5),
                --     [1] = is_vt and (is_hc and aki(0.5) or {}) or aki(0.5),
                --     [10] = is_vt and (is_hc and aki(0.5) or {}) or aki(0.5),
                --     [3] = is_vt and (is_hc and aki(0.5) or aki(0.25, 1)) or aki(0.5),
                --     [5] = is_vt and (is_hc and aki(0.5) or {}) or aki(0.5),
                --     [51] = is_vt and (is_hc and aki(0.5) or {}) or aki(0.5),
                --     [52] = is_vt and (is_hc and aki(0.5) or {}) or aki(0.5)
            },
        },
        [5] = {
            -- 间隔号
            chars = {'・', '·'},
            align = 'middle',
            --   left = 0,
            --   down = 0,
            width = 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [0] = aki(0.25, -1),
                --     [1] = aki(0.25, -1),
                --     [10] = aki(0.25, -1),
                --     [2] = aki(0.25, -1),
                --     [20] = aki(0.25, -1),
                --     [21] = aki(0.25, -1),
                --     [22] = aki(0.25, -1),
                --     [3] = aki(0.5, -1),
                --     [4] = aki(0.25, -1),
                --     [41] = aki(0.25, -1),
                --     [42] = aki(0.25, -1),
                --     [5] = aki(0.25, -1),
                --     [6] = aki(0.25, -1)
            },
        },
        [6] = {
            -- 句号
            chars = {'。', '．'},
            --   align = 'left',
            --   left = 0,
            --   down = 0,
            width = 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [0] = aki(0.5, 1, true),
                --     [1] = aki(0.5, 1, true),
                --     [10] = aki(0.5, 1, true),
                --     [3] = aki(0.5, 1, true),
                --     [5] = aki(0.5, 1, true),
                --     [51] = aki(0.5, 1, true),
                --     [52] = aki(0.5, 1, true)
            },
        },
        [61] = {
            -- 叹号
            chars = {'！'},
            --   align = is_vt and 'middle' or 'left',
            --   left = 0,
            --   down = 0,
            --   width = is_vt and 1 or 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [0] = is_vt and {} or aki(0.5, 1, true),
                --     [1] = is_vt and {} or aki(0.5, 1, true),
                --     [10] = is_vt and {} or aki(0.5, 1, true),
                --     [3] = is_vt and aki(0.25, -1) or aki(0.5, 1, true),
                --     [5] = is_vt and {} or aki(0.5, 1, true),
                --     [51] = is_vt and {} or aki(0.5, 1, true),
                --     [52] = is_vt and {} or aki(0.5, 1, true)
            },
        },
        [62] = {
            -- 问号
            chars = {'？'},
            align = 'left',
            --   left = 0,
            --   down = 0,
            --   width = is_vt and 1 or 0.5,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [0] = is_vt and {} or aki(0.5, 1, true),
                --     [1] = is_vt and {} or aki(0.5, 1, true),
                --     [10] = is_vt and {} or aki(0.5, 1, true),
                --     [3] = is_vt and aki(0.25, -1) or aki(0.5, 1, true),
                --     [5] = is_vt and {} or aki(0.5, 1, true),
                --     [51] = is_vt and {} or aki(0.5, 1, true),
                --     [52] = is_vt and {} or aki(0.5, 1, true)
            },
        },
        [63] = {
            -- 复合/连用叹号问号
            chars = {'‼', '⁇', '⁈', '⁉'},
            align = 'left',
            --   left = 0,
            --   down = 0,
            width = 1,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            glue = {
                --     [3] = aki(0.25, -1)
            },
        },
        [7] = {
            -- 一字线、省略号、波浪线
            chars = {'—', -- U+2014
            '―', -- U+2015
            '‥', '…', '〜', -- U+301C
            '～' -- U+FF5E
            },
            align = 'left',
            --   left = 0,
            --   down = 0,
            width = 1,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            --   italic = 0,
            -- glue = {
            --     [1] = aki(0.5, -1),
            --     [10] = aki(0.5, -1),
            --     [3] = aki(0.25, -1)
            -- },
            -- kern = {
            --     [5] = 0,
            --     [51] = 0,
            --     [52] = 0
            -- },
        },
        [71] = {
            -- U+2E3A TWO-EM DASH
            chars = {'⸺'},
            align = 'left',
            --   left = 0,
            --   down = 0,
            width = 2,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            italic = 0,
            --   glue = {
            --     [1] = aki(0.5, -1),
            --     [10] = aki(0.5, -1),
            --     [3] = aki(0.25, -1)
            --   },
            --   kern = {
            --     [5] = 0,
            --     [51] = 0,
            --     [52] = 0
            --   }
        },
        [72] = {
            -- U+2E3B THREE-EM DASH
            chars = {'⸻'},
            align = 'left',
            --   left = 0,
            --   down = 0,
            width = 3,
            --   height = is_vt and 0.5 or 0.88,
            --   depth = is_vt and 0.5 or 0.12,
            --   italic = 0,
            --   glue = {
            --     [1] = aki(0.5, -1),
            --     [10] = aki(0.5, -1),
            --     [3] = aki(0.25, -1)
            --   },
            --   kern = {
            --     [5] = 0,
            --     [51] = 0,
            --     [52] = 0
            --   }
        },
        [8] = {
            -- box end
            chars = {'boxbdd', 'parbdd', 'jcharbdd', 'alchar', 'nox alchar', 'glue', -1},
            --   glue = {
            --     [3] = aki(0.25, -1)
            --   }
        },
    }

    return baseJFMTable
end

return createBaseJFMTable
