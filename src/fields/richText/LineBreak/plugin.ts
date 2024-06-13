import { RichTextCustomElement } from "@payloadcms/richtext-slate"
import type { BaseEditor } from 'slate'


type RichTextPlugin = Exclude<RichTextCustomElement['plugins'], undefined>[0]

const addBreakLine:RichTextPlugin = incomingEditor => {
    const editor: BaseEditor & {
      shouldBreakOutOnEnter?: (element: any) => boolean // eslint-disable-line @typescript-eslint/no-explicit-any
    } = incomingEditor
  
    const { shouldBreakOutOnEnter } = editor
  
    if (shouldBreakOutOnEnter) {
      editor.shouldBreakOutOnEnter = element =>
        element.type === 'break-line' ? true : shouldBreakOutOnEnter(element)
    }
  
    return editor
  }
  

  export default addBreakLine