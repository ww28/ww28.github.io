let reloadLast = Date.now();

window.addEventListener('mousedown', function() {
    if (Date.now() - reloadLast > 230) window.mehitting = true
    reloadLast = Date.now()
    setTimeout(()=>{
        window.mehitting = false
    }, 120);
});

window.addEventListener('touchstart', function() {
    if (Date.now() - reloadLast > 230) window.mehitting = true
    reloadLast = Date.now()
    setTimeout(()=>{
        window.mehitting = false
    }, 120);
});

