# Generated by Django 2.0.6 on 2018-06-26 01:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('integrantes', '0007_auto_20180625_2214'),
    ]

    operations = [
        migrations.AlterField(
            model_name='integrante',
            name='imagen',
            field=models.ImageField(blank=True, upload_to=''),
        ),
    ]
