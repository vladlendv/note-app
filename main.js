'use strict';


setTimeout(() => {
    const body = document.querySelector('body')
    body.classList.remove('body-hide')
    body.classList.add('body-visible')
}, 200)

const main = document.querySelector('body')
const switchBtn = document.querySelector('#switch-theme')
const addNoteBtn = document.querySelector('#add-note')
const noteText = document.querySelector('#note-text')
const noteContainer = document.querySelector('.note-container')
const doneList = document.querySelector('.done-note')

let note = document.createElement('div')
note.classList.add('note')
note.classList.add('body-hide')
noteContainer.append(note)
setTimeout(() => {
    note.textContent = 'Create your first note!'
    note.classList.remove('body-hide')
    note.classList.add('body-visible')
}, 1500)

switchBtn.addEventListener('change', () => {
    if (main.classList.value == 'light') {
        main.classList = 'dark'
    } else {
        main.classList = 'light'
    }
})

addNoteBtn.addEventListener('click', createNewNote)

function createNewNote() {
    if (noteText.value != '') {
        let note = document.createElement('div')
        let btn = document.createElement('button')
        btn.innerText = 'X'
        btn.title = 'Delete Note'
        note.innerText = noteText.value
        note.append(btn)
        note.classList.add('note')
        btn.classList.add('note-btn')
        noteContainer.append(note)
        noteText.value = ''
    }
}

document.addEventListener('click', (e) => {
    if (e.target.className == 'note-btn') {
        let done = e.target.parentElement
        e.target.parentElement.remove()
        doneList.append(done)
        done.classList = 'done'
    }
})