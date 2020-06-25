'use strict'
const KEY = 'emails'
var newEmails = [];
var gEmails = createEmails();

import { Utils } from '../../../service/utils.service.js';

export const emailServices = {
    getEmails,
    _saveEmailsToStorage,
    getById,
    getNextEmailId,
    changedToRead,
    changedToNotRead

}

function createEmails() {
    var emails = Utils.loadFromStorage(KEY)
    if (!emails || !emails.length) {
        for (var i = 0; i < 5; i++) {
           newEmails.push(_createEmail());
        }
        gEmails = newEmails;
    }else gEmails = emails;
    console.log(gEmails)
    _saveEmailsToStorage();
    return gEmails
}

function getEmails() {
    return Promise.resolve(gEmails);
}

function _saveEmailsToStorage() {
    Utils.storeToStorage(KEY, gEmails)
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function _createEmail(subject, body) {
    if (!subject) subject = Utils.loremIpsum(2, 6);
    if (!body) body = Utils.loremIpsum(10, 100);
    return {
        id: Utils.getRandomId(),
        subject: subject,
        body: body,
        isRead: false,
        sentAt: new Date
    }
}
function changedToRead(emailId) {
    var idx = gEmails.findIndex(email =>email.id === emailId);
    gEmails[idx].isRead = true
    _saveEmailsToStorage();
    return gEmails
}
function changedToNotRead(emailId) {
    var idx = gEmails.findIndex(email =>email.id === emailId);
    gEmails[idx].isRead = false
    _saveEmailsToStorage();
    return gEmails
}


function getNextEmailId(emailId) {
    var idx = gEmails.findIndex(email =>email.id === emailId)
    if (idx === gEmails.length-1 ) idx = 0
    else idx = idx + 1;
    return Promise.resolve(gEmails[idx].id)
}

// function saveEmail(email) {
//     email.id = Utils.getRandomId();
//     gEmails.unshift(email);
// }



// function onRemoveEmail(emailId) {
//   var emailIdx = gEmails.findIndex(function (email) {
//       return emailId === email.id;
//   });
//   gEmails.splice(emailIdx, 1);
//   _saveEmailsToStorage();
//   renderTableOfEmails();
//   pageOfPage();
// }

