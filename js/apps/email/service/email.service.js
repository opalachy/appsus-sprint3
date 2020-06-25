'use strict'
const KEY = 'emails'
var gEmails = createEmails();

import { Utils } from '../../../service/utils.service.js';

export const emailServices = {
    getEmails,
    _saveEmailsToStorage,
    getById,
    getNextEmail,
    markRead,
    markNotRead,
    removeEmail,
    sendEmail

}

function createEmails() {
    var emails = Utils.loadFromStorage(KEY)
    const newEmails = []; 
    if (!emails || !emails.length) {
        for (var i = 0; i < 5; i++) {
            newEmails.push(_createEmail());
        }
        gEmails = newEmails;
    } else gEmails = emails;
    console.log(gEmails)
    _saveEmailsToStorage();
    return gEmails
}

function sendEmail(email){
    gEmails.unshift(email);
    _saveEmailsToStorage();
}

function getEmails() {
    return Promise.resolve(gEmails);
}

function _saveEmailsToStorage() {
    Utils.storeToStorage(KEY, gEmails)
}

function getById(emailId) { //to add a case for not finding an ID
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function _createEmail(subject, body) {
    if (!subject) subject = Utils.loremIpsum(2, 6);
    if (!body) body = Utils.loremIpsum(10, 100);
    return {
        id: Utils.getRandomId(),
        to: 'Yossi@gmail.com',
        cc: 'Puki@gmail.com',
        bcc: 'Muki@gmail.com',
        subject: subject,
        body: body,
        isRead: false,
        sentAt: new Date
    }
}

function markRead(emailId) { 
    var idx = gEmails.findIndex(email => email.id === emailId);
    gEmails[idx].isRead = true
    _saveEmailsToStorage();
    return gEmails
}
function markNotRead(emailId) {
    var idx = gEmails.findIndex(email => email.id === emailId);
    gEmails[idx].isRead = false
    _saveEmailsToStorage();
    return gEmails
}


function getNextEmail(emailId) { 
    var idx = gEmails.findIndex(email => email.id === emailId)
    if (idx === gEmails.length - 1) idx = 0
    else idx = idx + 1;
    return Promise.resolve(gEmails[idx].id)
}


function removeEmail(emailId) {
    var emailIdx = gEmails.findIndex(function (email) {
        return emailId === email.id;
    });
    gEmails.splice(emailIdx, 1);
    _saveEmailsToStorage();
}

