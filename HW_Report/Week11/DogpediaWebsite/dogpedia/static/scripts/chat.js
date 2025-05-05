// 初始化Socket.IO連接
const socket = io();
let currentRoom = '';

// 獲取DOM元素
const chatBox = document.getElementById('chat-box');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const usernameInput = document.getElementById('username-input');
const roomInput = document.getElementById('room-input');
const joinBtn = document.getElementById('join-btn');
const leaveBtn = document.getElementById('leave-btn');

// 添加訊息至聊天區域
function addMessage(message, isSystem = false) {
const msgElement = document.createElement('div');
msgElement.className = isSystem ? 'message system-message' : 'message';
msgElement.innerHTML = message;
chatBox.appendChild(msgElement);
chatBox.scrollTop = chatBox.scrollHeight;
}

// 連接成功事件
socket.on('connect', () => {
    addMessage('已連接到伺服器', true);
    console.log('Connected with ID:', socket.id);
});

// 連接斷開事件
socket.on('disconnect', () => {
    addMessage('與伺服器連接已斷開', true);
});

// 接收普通訊息
socket.on('message', (data) => {
    addMessage(`<span class="user-info">${data.user}:</span>${data.message}`);
});
// 接收聊天室公告
socket.on('room_announcement', (data) => {
    addMessage(data.message, true);
});

// 發送訊息表單提交
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    const username = usernameInput.value.trim() || '訪客';
    
    if (message && currentRoom) {
        socket.emit('chat_message', {
            user: username,
            message: message,
            room: currentRoom
        });
        messageInput.value = '';
        }
});

// 加入聊天室
joinBtn.addEventListener('click', () => {
    const room = roomInput.value.trim();
    const username = usernameInput.value.trim() || '訪客';
    
    if (room) {
    // 如果已在其他聊天室，先離開
        if (currentRoom && currentRoom !== room) {
            socket.emit('leave_room', { room: currentRoom, user: username });
        }
    currentRoom = room;
    socket.emit('join_room', { room: room, user: username });
    addMessage(`已加入聊天室: ${room}`, true);
    }
});

