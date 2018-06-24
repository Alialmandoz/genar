from rest_framework import serializers
from integrantes.models import Integrante, Articulo


class IntegranteSerializer(serializers.ModelSerializer):
    class Meta():
        model = Integrante
        fields = ('nombre', 'email', 'imagen', 'password')


class ArticuloSerializer(serializers.Serializer):
    titulo = serializers.CharField(max_length=100)
    archivo = serializers.FileField()

    def create(self, validated_data):
        return Articulo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.titulo = validated_data.get('titulo', instance.titulo)
        instance.archivo = validated_data.get('archivo', instance.archivo)

        instance.save()

        return instance
