# Generated by Django 3.2.7 on 2021-11-06 15:12

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0008_auto_20211106_1503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='employment_duration',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(help_text='MONTH-YYYY - MONTH-YYYY or MONTH-YYYY - present (LinkedIn-like notation)', max_length=100), size=5),
        ),
    ]
