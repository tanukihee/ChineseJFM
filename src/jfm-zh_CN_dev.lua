-- Chinese JFM for Simplified Chinese fonts (zh_CN)
-- v1.2.0, 2022/xx/xx
-- Copyright (c) 2020 -- 2022 ListLee.
luatexbase.provides_module({
    ["name"] = "chinese-jfm",
    ["info"] = "Chinese JFM for Simplified Chinese fonts (zh_CN)",
    ["date"] = "2022/xx/xx",
    ["version"] = "v2.0.0",
})

-- 版本判断
if not luatexja.jfont.jfm_feature then
    tex.error("JFM features unsupported. Please update luatexja to 20200919 or higher")
end

--- 获取 feature 值
---@param feature boolean|string @JFM feature 名称
---@param defaultVal? number @默认值
---@return boolean|number
local function getJfmFeature(feature, defaultVal)
    if (type(defaultVal) == "nil") then
        return luatexja.jfont.jfm_feature[feature]
    end

    if type(feature) == "boolean" then
        return defaultVal
    else
        return tonumber(luatexja.jfont.jfm_feature[feature])
    end
end

local cnJFM = require("createBaseJFMTable")()

local isQuanjiao = getJfmFeature("quanjiao")
local isBanjiao = getJfmFeature("banjiao")
local isKaiming = getJfmFeature("kaiming")
local isVert = getJfmFeature("vert")
local isHwColon = getJfmFeature("hwcl")

local fzParenthesis = getJfmFeature("fzpr", 0.25)
local toJaJP = getJfmFeature("tojp", 0.25)
local toZhTW = getJfmFeature("totw", 0.25)
local hang = getJfmFeature("hang", 0)

if isHwColon and not isVert then
    tex.error('JFM feature "hwcl" can only be used in vertical mode.')
end

if (isQuanjiao and 1 or 0) + (isBanjiao and 1 or 0) + (isKaiming and 1 or 0) > 1 then
    tex.error('You can specify ONLY ONE feature among "quanjiao", "banjiao" and "kaiming"')
end

if (isQuanjiao and 1 or 0) + (isBanjiao and 1 or 0) + (isKaiming and 1 or 0) == 1 then
    luatexbase.module_info("chinese-jfm", "No jfm feature specified. Using kaiming feature by default.")
end

--- 插入空白量
---@param wd number @空白长度
---@param pr? number @优先级；默认为 0
---@param isKmPunct? boolean  @是否为开明点号（即在开明样式下占全宽的点号）；默认为 false
local function aki(wd, pr, isKmPunct)
    local p = pr or 0

    if (isBanjiao and isKmPunct) or (not isQuanjiao and not isKmPunct) then
        return {
            0,
            wd,
            0,
            priority = {p, -p},
        }
    else
        return {
            wd,
            0,
            wd,
            priority = {p, -p},
        }
    end
end

--- 悬挂标点
local function hang()
    return {
        -0.5,
        -0.5,
        -0.5,
        priority = 3,
    }
end
