function _(id) {
    return document.getElementById(id);
}

function getRs() {
    let txt = _('txt').value;
    const d = new Date();
    let entryHTML = `<div class="card"><p>${txt}</p><small>${d.toLocaleTimeString()}, ${d.toLocaleDateString()}</small></div>`;
    
    // Image file handling
    const imageFile = _('imageInput').files[0];
    if (imageFile) {
        const imageURL = URL.createObjectURL(imageFile);
        entryHTML += `<img src="${imageURL}" alt="Image" width="200">`;
    }
    
    // Video file handling
    const videoFile = _('videoInput').files[0];
    if (videoFile) {
        const videoURL = URL.createObjectURL(videoFile);
        entryHTML += `<video width="320" height="240" controls><source src="${videoURL}" type="video/mp4">Your browser does not support the video tag.</video>`;
    }
    
    _('rs').innerHTML += entryHTML;
}
