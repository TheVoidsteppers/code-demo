<template>
  <div id="monaco-editor"></div>
</template>

<script>
import * as monaco from 'monaco-editor' // 改成异步加载
// import vLang from './custom-language'
// import vCompletion from './custom-completion'

export default {
  name: 'MonacoEditor',
  props: {
    value: {
      type: String
    },
    language: {
      type: String,
      default: 'javascript'
    },
    theme: {
      type: String,
      default: 'vs-dark'
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      code: '',
      monacoInstance: {},
      defaultOptions: {
        fontSize: '12px',
        folding: false,
        colorDecorators: false,
        formatOnPaste: true,
        formatOnType: true,
        minimap: {
          enabled: false
        }
      },
      isSetValue: false,
      vEditor: {}
    }
  },
  watch: {
    value: {
      handler: function (value) {
        if (value !== this.code) {
          this.code = this.value
          this.isSetValue = true
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.initMonaco()
  },
  methods: {
    initMonaco () {
      let monacoOptions = Object.assign({}, this.defaultOptions, this.options)
      monacoOptions.value = this.code
      monacoOptions.language = this.language
      monacoOptions.theme = this.theme

      this.MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
          return './editor.worker.bundle.js'
        }
      }
      // // 注册自定义语言
      // monaco.languages.register({ id: 'mySpecialLanguage' })
      // // 为该自定义语言基本的Token
      // monaco.languages.setMonarchTokensProvider('mySpecialLanguage', vLang)
      // // 为该语言注册一个语言提示器--联想
      // monaco.languages.registerCompletionItemProvider('mySpecialLanguage', { provideCompletionItems: () => { return { suggestions: vCompletion } } })
      // // 创建编辑器
      // this.vEditor.editor = monaco.editor.create(document.getElementById('monaco-editor'), {
      //   value: this.vEditor.value,
      //   theme: this.vEditor.theme,
      //   language: 'mySpecialLanguage'
      // })

      this.monacoInstance = monaco.editor.create(document.getElementById('monaco-editor'), monacoOptions)

      let setModelMarkers = monaco.editor.setModelMarkers
      this.monacoInstance.onDidChangeModelContent(e => {
        monaco.editor.setModelMarkers = (model, owner, markers) => {
          setModelMarkers.call(monaco.editor, model, owner, markers)
          if (markers.length === 0) {
            // 没有错误的时候提交value
            const newValue = this.monacoInstance.getValue()
            if (newValue) {
              this.$emit('input', newValue)
            }
          }
        }
      })
      if (this.isSetValue) {
        // 自动格式化
        setTimeout(() => {
          this.monacoInstance.getAction('editor.action.formatDocument').run()
          this.isSetValue = false
        }, 300)
      }
    }
  },
  beforeDestroy () {
    this.monacoInstance.dispose() // 销毁实例
  }
}
</script>

<style lang='scss' scoped>
#monaco-editor {
  width: 100%;
  height: 300px;
}
</style>
