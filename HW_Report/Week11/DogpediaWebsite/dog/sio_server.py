import socketio

# 創建Socket.IO異步服務器實例
sio = socketio.AsyncServer(cors_allowed_origins='*', async_mode='asgi')

# 連線事件處理
@sio.event
async def connect(sid, environ):
    print(f'客戶端已連接: {sid}')

@sio.event
async def disconnect(sid):
    print(f'客戶端已斷開連接: {sid}')

# 自定義事件處理
@sio.event
async def chat_message(sid, data):
    print(f'收到訊息 from {sid}: {data}')
    room = data.get('room')
    await sio.emit('message', {
        'user': data.get('user', 'Anonymous'),
        'message': data.get('message')
    }, room=room)

# 自定義事件處理：加入聊天室
@sio.event
async def join_room(sid, data):
    room = data.get('room')
    user = data.get("user", "某人")
    sio.enter_room(sid, room)
    await sio.emit('room_announcement',
                   {'message': f'用戶 {user} 已加入 {room} 聊天室'},
                   room=room)
    
# 自定義事件處理：離開聊天室
@sio.event
async def leave_room(sid, data):
    room = data.get('room')
    user = data.get("user", "某人")
    sio.leave_room(sid, room)
    await sio.emit('room_announcement',
                   {'message': f'用戶 {user} 已離開 {room} 聊天室'},
                   room=room)