# Generated by Django 3.0.2 on 2020-01-24 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wapp', '0002_remove_writer_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='writer',
            name='name',
            field=models.CharField(default='Anna', max_length=200),
        ),
    ]
