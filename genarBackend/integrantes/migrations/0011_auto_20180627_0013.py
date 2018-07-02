# Generated by Django 2.0.6 on 2018-06-27 03:13

from django.db import migrations, models
import sorl.thumbnail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('integrantes', '0010_auto_20180626_2352'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articulo',
            name='archivo',
            field=models.FileField(upload_to='uploads/'),
        ),
        migrations.AlterField(
            model_name='integrante',
            name='imagen',
            field=sorl.thumbnail.fields.ImageField(blank=True, upload_to='images/'),
        ),
    ]
