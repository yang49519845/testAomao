import * as Y from 'yjs';

export function testYDoc() {
  const doc = new Y.Doc();
  const yarray = doc.getArray('my-array')

  yarray.observe(event => {
    console.log('yarray was modified')
  })

  yarray.insert(0, ['val']) // => "yarray was modified"

}
