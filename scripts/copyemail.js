function copyEmail(buttonElement) {
    const email = "sierrajmerrick@gmail.com";

    navigator.clipboard.writeText(email)
    .then(()=>{
        document.getElementById('custom-alert').style.display = 'block';
    })
    .catch (err=>{
        console.log("failed to copy due to" + err);
    })
}

function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
}