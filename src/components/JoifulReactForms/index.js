import TextElement from './TextElement'

export default {
    customInputElementTypes: {
        textElement: TextElement
    },
    options: {
        language: {
            string: {
                regex: {
                    base: 'with value "{{!value}}" is invalid'
                }
            }
        }
    }
}
