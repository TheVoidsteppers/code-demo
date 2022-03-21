const path = require('path')
const webpack = require('webpack')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.entry.app = [
      // Package each language's worker and give these filenames in `getWorkerUrl`
      { 
        "editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
        "json.worker": 'monaco-editor/esm/vs/language/json/json.worker',
        "css.worker": 'monaco-editor/esm/vs/language/css/css.worker',
        "html.worker": 'monaco-editor/esm/vs/language/html/html.worker',
        "ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker'
      }
      ],
    config.plugins.delete('prefetch')
    /* config.plugin('html') */
    config.plugin('html')
      .tap(args => {
        args[0].template = resolve('public/index.html')
        return args
      })

    config.plugin('provide')
      .use(webpack.ProvidePlugin, [
        {
          _: 'lodash'
        }
      ])

    config.plugin('monaco')
      .use(new MonacoWebpackPlugin({
        languages: ['json', 'javascript', 'typescript']
      }))

    /* 设置 resolve.alias */
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))

  }
}