const duplicateEncode = require('./duplicateEncode')

describe('duplicateEncode', () => {
  it('converts a letter to ( if it appears once', () => {
    expect(duplicateEncode('d')).toEqual('(')
  })
  it('works for words whose letters appear once', () => {
    expect(duplicateEncode('din')).toEqual('(((')
  })
})