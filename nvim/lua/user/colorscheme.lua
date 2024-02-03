local M = {
  -- "lunarvim/darkplus.nvim",
  -- "rebelot/kanagawa.nvim",
  "luisiacc/gruvbox-baby",
  lazy = false, -- make sure we load this during startup if it is your main colorscheme
  priority = 1000, -- make sure to load this before all the other start plugins
  branch='main'
}

function M.config()
  -- vim.cmd.colorscheme "darkplus"
  -- vim.cmd.colorscheme "kanagawa-dragon"
  
  vim.cmd.colorscheme "gruvbox-baby"
end

return M
