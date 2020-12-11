import number from '@strajk/demo-lerna-some-number'
import text from '@strajk/demo-lerna-some-text'
import emoji from '@strajk/demo-lerna-some-emoji'

export default function demoLernaSomeCombo () {
  return [
    number(),
    text(),
    emoji()
  ].join(' | ')
}
