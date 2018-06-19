from rest_framework import serializers
from integrantes.models import Integrante, Articulo


class IntegranteSerializer(serializers.ModelSerializer):
    class Meta():
        model = Integrante
        fields = ('nombre', 'email', 'imagen', 'password')


# class IntegranteSerializer(serializers.Serializer):
# nombre = serializers.CharField(max_length=100)
#     email = serializers.EmailField(max_length=70)
#     image = serializers.FileField()
#     password = serializers.CharField(max_length=100)
#
#     def create(self, validated_data):
#         return Integrante.objects.create(**validated_data)
#
#     def update(self, instance, validated_data):
#         instance.nombre = validated_data.get('nombre', instance.nombre)
#         instance.email = validated_data.get('email', instance.email)
#         instance.password = validated_data.get('password', instance.password)
#
#         instance.save()
#
#         return instance


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
