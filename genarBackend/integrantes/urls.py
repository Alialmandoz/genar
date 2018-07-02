from django.conf.urls import url
from integrantes import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^integrantes/$', views.integrantes_list),
    url(r'^integrantes/(?P<pk>[0-9]+)/$', views.integrante_detail),
    url(r'^articulos/$', views.articulos_list),
    url(r'^articulos/(?P<pk>[0-9]+)/$', views.articulo_detail),
]