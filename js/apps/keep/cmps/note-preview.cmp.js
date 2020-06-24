

import noteDetails from './note-details.cmp.js'

export default{
  props:['note'],
  template:`
        <li>
            <note-details :note="note"></note-details>
        </li>
    `,
    components:{
        noteDetails
    }

}

