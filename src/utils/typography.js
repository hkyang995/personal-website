import Typography from 'typography'
import theme from 'typography-theme-wordpress-2014'
import CodePlugin from 'typography-plugin-code'

theme.plugins = [new CodePlugin()]

const typography = new Typography(theme)

typography.injectStyles()

export default typography
