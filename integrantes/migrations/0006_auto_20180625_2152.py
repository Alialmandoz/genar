# Generated by Django 2.0.6 on 2018-06-26 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('integrantes', '0005_auto_20180623_1938'),
    ]

    operations = [
        migrations.AlterField(
            model_name='integrante',
            name='imagen',
            field=models.ImageField(blank=True, upload_to='static/integrantes/images/'),
        ),
    ]
