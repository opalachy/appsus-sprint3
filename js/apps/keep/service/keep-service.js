
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
      }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteText",
          isPinned: true,
          info: {
          txt: "Reaminder go to have coffe!"
      }
      },
      {
          id: Utils.getRandomId(),        
          type: "NoteImg",
          info: {
          url: "img/humor.jpg",
          title: "Me playing Mi"
      },
        style: {
          backgroundColor: "#00d"
      }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteVideo",
          info: {
          url: "https://www.youtube.com/watch?v=yYDmaexVHic",
          title: "some video"
      },
        style: {
          backgroundColor: "#00d"
      }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteVideo",
          info: {
          url: "https://www.youtube.com/watch?v=FOyuZXUkawg",
          title: "some video"
      },
        style: {
          backgroundColor: "#00d"
      }
      },
      {
          id: Utils.getRandomId(),
          type: "NoteTodos",
          info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: Date.now() }
            ]
          }
      }
 // <NoteAudio>: bonus
 // <NoteMap>: bonus
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
  var noteIdx = gNote.findIndex(function (note) {
      return noteId === note.id;
  });
   gNote.splice(noteIdx, 1);
   saveNoteToStorage()
}

