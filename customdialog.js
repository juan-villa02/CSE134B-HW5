import'./DOMPurify-main/dist/purify.min.js'

// Display alert dialog
export function customAlert(alertDialogID, alertButtonID, okAlertID, outputID) {
    let alertDialog = document.getElementById(alertDialogID);
    let alertButton = document.getElementById(alertButtonID);
    let okAlert = document.getElementById(okAlertID);
    let outputBox = document.querySelector(outputID);

    alertButton.addEventListener('click', () => {
        alertDialog.showModal();
    });

    okAlert.addEventListener('click', () => {
        outputBox.innerHTML = `Ouput: alert closed.`;
    });
}

// Display confirm dialog
export function customConfirm(confirmDialogID, confirmButtonID, okConfirmID, cancelConfirmID, outputID) {
    let confirmDialog = document.getElementById(confirmDialogID);
    let confirmButton = document.getElementById(confirmButtonID);
    let okConfirm = document.getElementById(okConfirmID);
    let cancelConfirm = document.getElementById(cancelConfirmID);
    let outputBox = document.getElementById(outputID);

    confirmButton.addEventListener('click', () => {
        confirmDialog.showModal();
    });

    okConfirm.addEventListener('click', () => {
        outputBox.innerHTML = `Confirm Output: ${okConfirm.value}.`;
    });

    cancelConfirm.addEventListener('click', () => {
        outputBox.innerHTML = `Confirm Output: ${cancelConfirm.value}.`;
    });
}

// Display prompt dialog
export function customPrompt(promptDialogID, promptButtonID, inputTextID, okPromptID, cancelPromptID, outputID) {

    let promptDialog = document.getElementById(promptDialogID);
    let promptButton = document.getElementById(promptButtonID);
    let textPrompt = document.getElementById(inputTextID)
    let okPrompt = document.getElementById(okPromptID);
    let cancelPrompt = document.getElementById(cancelPromptID);
    let outputBox = document.getElementById(outputID);

    promptButton.addEventListener('click', () => {
        promptDialog.showModal();
    });

    okPrompt.addEventListener('click', () => {
        outputBox.innerHTML = `Your name: ${DOMPurify.sanitize(textPrompt.value)}.`;
    });

    cancelPrompt.addEventListener('click', () => {
        outputBox.innerHTML = `Your name: "no name inserted".`;
    });
}