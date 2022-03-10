import theme from './theme'

export function inputHeight(height: number) {
  return {
    '& *.rfc-input': {
      height: height,
      lineHeight: `${height - (height / 3)}px`,
      paddingTop: height / 6,
      paddingBottom: height / 6,
      '&[type=file]': {
        lineHeight: `${height * 0.45}px`,
      },
    },
    '& textarea.rfc-input': {
      minHeight: height,
      height: 'auto',
    },
    '& .rfc-select:not([multiple])': {
      backgroundPosition: `calc(100% - 15px) ${height / 2 - 2}px, calc(100% - 10px) ${height / 2 - 2}px`,
    },
    '& $prefix, & $suffix': {
      height,
      lineHeight: `${height}px`,
    },
    '&$inlineLabel > $label': {
      [breakpoint(theme.breakpoints.sm)]: {
        lineHeight: `${height}px`,
        marginBottom: 0,
      },
    },
    '&$inlineLabel .rfc-checkitem': {
      marginTop: height / 4,
    },
  }
}

export function breakpoint(width: string) {
  return `@media (min-width: ${width})`
}

export function clearfix() {
  return {
    '&:after': {
      content: '',
      display: 'table',
      clear: 'both',
    },
  }
}

export function overlay() {
  return {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
  }
}

export function maxRows(amount?: number) {
  return {
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': amount || 1,
    '-webkit-box-orient': 'vertical',
  }
}

export function placeholder(styles: React.CSSProperties) {
  return {
    '&::-moz-placeholder': {
      ...styles,
    },
    '&:-ms-input-placeholder': {
      ...styles,
    },
    '&::-webkit-input-placeholder': {
      ...styles,
    },
  }
}
