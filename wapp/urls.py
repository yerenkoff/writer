from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
	path('', views.index, name='index'),
    path('admin/', views.admin, name='admin'),
    path('newPost/', views.newPost, name='newPost'),
    path('delete/', views.delete, name='delete'),
    path('more/', views.more, name='more'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)