import React from 'react'

function Upload() {
  return (
    <div>
        <form action='http://localhost:4800/ac' method='post' encType='multipart/form-data'>
        in
      <input type='file' name='my file'/><i>adhar</i>
      {/* <input type='file' name='pic'/><i>photo</i>
      <input type='file' name='sin'/><i>sinature</i>
      <input type='file' name='ci'/><i>scor</i>
      <input type='file' name='scu'/><i>security documents</i>
      <input type='file' name='acc'/><i>account</i>
      <input type='file' name='pan'/><i>pancard</i> */}
      <button>submit</button>
        </form>
    </div>
  )
}

export default Upload
