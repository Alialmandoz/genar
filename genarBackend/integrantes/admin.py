from django.contrib import admin

from .models import Integrante, Articulo

admin.site.index_title = "Administrar integrantes Genar"

admin.site.site_title = "Genar"
admin.site.site_header = "Genar"
admin.site.site_url = 'http://127.0.0.1:5500/index.html'


@admin.register(Integrante)
class IntegranteAdmin(admin.ModelAdmin):
    search_fields = ['nombre', 'email']
    list_display = ('nombre', 'email')
