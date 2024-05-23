document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('closed');
    document.querySelector('.main-content').classList.remove('sidebar-open');
    document.querySelector('.input-area-wrapper').classList.remove('sidebar-open');
});

document.getElementById('open-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('closed');
    document.querySelector('.main-content').classList.add('sidebar-open');
    document.querySelector('.input-area-wrapper').classList.add('sidebar-open');
});

document.getElementById('new-chat').addEventListener('click', function() {
    alert('New chat initiated');
});

document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('chat-input');
    if (input.value.trim() !== '') {
        const message = document.createElement('div');
        message.textContent = input.value;
        message.className = 'chat-message';
        document.querySelector('.chat-window').appendChild(message);
        input.value = '';
    }
});
