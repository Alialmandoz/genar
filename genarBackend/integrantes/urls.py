from django.conf.urls import url
from integrantes import views


urlpatterns = [
    url(r'^integrantes/$', views.integrantes_list),
    url(r'^integrantes/upload/$', views.FileView.as_view(), name='file-upload'),
    url(r'^integrantes/(?P<pk>[0-9]+)/$', views.integrante_detail),
]