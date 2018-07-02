from rest_framework import serializers
from integrantes.models import Integrante, Articulo


class IntegranteSerializer(serializers.ModelSerializer):
    class Meta():
        model = Integrante
        fields = ('nombre', 'email', 'imagen', 'password')


class ArticuloSerializer(serializers.ModelSerializer):
    class Meta():
        model = Articulo
        fields = ('id', 'titulo', 'archivo', 'tipo')