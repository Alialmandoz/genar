from django.db import models
from sorl.thumbnail import ImageField as imgField


class Integrante(models.Model):
    nombre = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=70, blank=True)
    imagen = imgField(blank=True, upload_to='images/')
    password = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.nombre


class Articulo(models.Model):
    titulo = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100, default='')
    archivo = models.FileField(upload_to='uploads/')
    imagen = imgField(blank=True, upload_to='images/')
    TIPO_CHOICES = (
        ('P', 'PAPER'),
        ('T', 'TESIS'),
    )
    tipo = models.CharField(max_length=1, choices=TIPO_CHOICES)

    def __str__(self):
        return self.titulo
