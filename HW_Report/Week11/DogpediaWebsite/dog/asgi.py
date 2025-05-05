"""
ASGI config for dog project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os
import django
from django.core.asgi import get_asgi_application
import socketio

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dog.settings')

# 獲取Django的ASGI應用程序
django_asgi_app = get_asgi_application()

# 匯入socket_io模組中的sio物件
from dog.sio_server import sio

# 將 Socket.IO 應用包裝 Django ASGI 應用
asgi_app = socketio.ASGIApp(sio, django_asgi_app)


