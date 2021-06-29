export default function nonBreakingText(text) {
  return text.replace(/ (?=[^ ]*$)/i, '&nbsp;')
}

