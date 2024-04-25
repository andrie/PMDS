mc_style = [[
<style>
    motion-canvas-player { width:  75%; }
</style>
]]

return {
  ['motion-canvas'] = function(args, kwargs, meta, raw_args) 

    quarto.doc.add_html_dependency({
      name = "motion-canvas", 
      version = "0.2.0",
      scripts = {'motion-canvas-player.js'},
      head = mc_style,
    })

    local stringify = pandoc.utils.stringify
    local src = stringify(args[1])

    local combined = {}
    -- iterate over args and insert into combined
    for i, k in ipairs(args) do
      if i == 1 then
        combined["src"] = k
      else 
        combined[k] = "true"
      end
    end

    -- iterate over kwargs and insert into combined
    for k, v in pairs(kwargs) do
        v = stringify(v)
        v = string.gsub(v, "^\"(.*)\"$", "%1")
      combined[k] = v
    end  
    
    -- quarto.log.output(combined)
  
    local parse_combined = function(key, default, css)
      css = css or false -- default to false
      local value = combined[key] or ""
      if value == "" then value = default end
      if css then 
        return key .. ':' .. value .. '; '
      else 
        return key .. '="' .. value .. '" '
      end  
    end

  
    local style = ""
    local fullscreen
    if combined["fullscreen"] == "true" then
      style = "position:absolute; top:0; width:100%; "
    end

    local width = combined["width"]
    if width == Nil then width = "" end
    if style ~= "" then
      width = ""
    else
      width = "width:" .. width .. "; "
    end

    local auto = combined["auto"] or ""
    if auto == "true" then
      auto = "auto=true "
    end

    local background = combined["background"] or ""
    if background == "true" then
        style = style .. "z-index: -1; "
    end

    style = 'style="' .. style .. '" '
  
    -- quarto.log.output(combined)

    local cmdArgs = ""
    cmdArgs = cmdArgs .. 
      auto ..
      parse_combined("loop", "true") ..
      style ..
      width ..
      -- background ..
      ""
      
      local out = 
      '<motion-canvas-player src="' .. src .. '" ' .. cmdArgs ..'></motion-canvas-player>'
      -- quarto.log.output(out)

    return pandoc.RawInline('html', out)
  end
}
