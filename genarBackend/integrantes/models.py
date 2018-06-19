from django.db import models


class Integrante(models.Model):
    nombre = models.CharField(max_length=100, blank=True)
    email = models.EmailField(max_length=70, blank=True)
    # imagen = models.FileField(blank=False, null=False)
    password = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.nombre


class Articulo(models.Model):
    titulo = models.CharField(max_length=100)
    archivo = models.FileField(upload_to='uploads/')
    TIPO_CHOICES = (
        ('P', 'PAPER'),
        ('T', 'TESIS'),
    )
    tipo = models.CharField(max_length=1, choices=TIPO_CHOICES)

    def __str__(self):
        return self.titulo


class Image(models.Model):
    imagen = models.FileField(blank=False, null=False)