
import {Utils} from '../../../service/utils.service.js';
const KEY = 'notes'
var gNote = createNotes();



export const keepServices = {
    getNotes,
    createNotes,
    saveNoteToStorage,
    RemoveNote
}

function createNotes() {
    var notes = Utils.loadFromStorage(KEY)
    if (!notes || !notes.length) {
      notes = [
      {
          id: Utils.getRandomId(),
          type: "NoteText",
          isPinned: true,
          info: {
              txt: "Fullstack Me Baby!"
          },
          style: {
            activeColor: 'darkorange'
          }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteText",
          isPinned: true,
          info: {
          txt: "Reaminder go to have coffe!"
        },
          style: {
            activeColor: 'plum'
        }
      },
      {
          id: Utils.getRandomId(),        
          type: "NoteImg",
          isPinned: false,
          info: {
              url: "img/humor.jpg",
              title: "Me playing Mi"
          },
          style: {
            activeColor: 'bisque'
          }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteVideo",
          isPinned: false,
          info: {
          url: "https://www.youtube.com/watch?v=yYDmaexVHic",
          title: "some video"
      },
        style: {
          activeColor: 'lightgreen'
      }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteVideo",
          isPinned: false,
          info: {
          url: "https://www.youtube.com/watch?v=FOyuZXUkawg",
          title: "some video"
      },
        style: {
          activeColor: 'lightgray'
      }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteTodos",
          isPinned: false,
          info: {
            label: "How was it:",
            todos: [
              { txt: "Coffe", doneAt: null},
              { txt: "Coding", doneAt: null},
              { txt: "Sleep", doneAt: null},
              { txt: "Repeat", doneAt: null}
            ]
          },
          style: {
            activeColor: 'lightblue'
        }
      }
   ];
  }
   gNote = notes;
   saveNoteToStorage()
   return gNote;
};


function getNotes() {
  return Promise.resolve(gNote);
  }
  
  function saveNoteToStorage() {
    Utils.storeToStorage(KEY, gNote)
  }


  
function RemoveNote(noteId) {
  var noteIdx = gNote.findIndex(note => noteId === note.id);
   gNote.splice(noteIdx, 1);
   saveNoteToStorage()
}

