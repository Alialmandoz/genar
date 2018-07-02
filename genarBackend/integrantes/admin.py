from django.contrib import admin

from .models import Integrante, Articulo
from sorl.thumbnail.admin import AdminImageMixin

admin.site.index_title = "Administrar integrantes Genar"
admin.site.site_title = "Genar"
admin.site.site_header = "Genar"
admin.site.site_url = '/'


@admin.register(Integrante)
class IntegranteAdmin(AdminImageMixin, admin.ModelAdmin):
    search_fields = ['nombre', 'email']
    list_display = ('nombre', 'email')


@admin.register(Articulo)
class IntegranteAdmin(admin.ModelAdmin):
    search_fields = ['titulo', 'tipo']
    list_display = ('titulo', 'tipo', 'archivo')
