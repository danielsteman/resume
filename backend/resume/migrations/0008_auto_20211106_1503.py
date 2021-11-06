# Generated by Django 3.2.7 on 2021-11-06 14:03

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0007_about_componentbase_experience_footer_home_projects'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='employment_description',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(help_text="Description about the work that I've done", max_length=750), size=5),
        ),
        migrations.AlterField(
            model_name='experience',
            name='employment_duration',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(help_text='MONTH-YYYY - MONTH-YYYY LinkedIn-like notation', max_length=25), size=5),
        ),
        migrations.AlterField(
            model_name='experience',
            name='employment_title',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(help_text='Position and employer name separated by @', max_length=25), size=5),
        ),
    ]
