function updateStatus(text: string) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            updateStatus(text);
        });
        return;
    }
    
    let statusContainer = document.querySelector('.status-container');

    if (!statusContainer) {
        statusContainer = document.createElement('div');
        statusContainer.className = 'status-container';
        statusContainer.innerHTML = `
        <div class="spinner"></div>
        <div class="status-text" id="status-text">${text}</div>
        `;
        document.body.appendChild(statusContainer);
    } else {
        const statusText = document.getElementById('status-text');
        if (statusText) {
            statusText.textContent = text;
        }
    }
}

window.updateStatus = updateStatus;

updateStatus('正在初始化...');