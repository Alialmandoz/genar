# Generated by Django 2.0.6 on 2018-06-23 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('integrantes', '0004_auto_20180617_2155'),
    ]

    operations = [
        migrations.AlterField(
            model_name='integrante',
            name='imagen',
            field=models.ImageField(blank=True, upload_to='../images/'),
        ),
    ]
