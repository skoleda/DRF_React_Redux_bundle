# Generated by Django 3.2.5 on 2021-07-26 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='created_at',
        ),
        migrations.AddField(
            model_name='todo',
            name='status',
            field=models.BooleanField(default=False),
        ),
    ]
