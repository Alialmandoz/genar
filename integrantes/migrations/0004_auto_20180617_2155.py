# Generated by Django 2.0.6 on 2018-06-18 00:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('integrantes', '0003_auto_20180617_2118'),
    ]

    operations = [
        migrations.AlterField(
            model_name='integrante',
            name='imagen',
            field=models.FileField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='integrante',
            name='nombre',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='integrante',
            name='password',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]