# Generated by Django 3.2.7 on 2021-11-10 15:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("resume", "0011_auto_20211110_1651")]

    operations = [
        migrations.RenameField(
            model_name="about", old_name="skills_columns", new_name="n_skills_columns"
        ),
        migrations.RenameField(
            model_name="projects",
            old_name="skills_columns",
            new_name="n_skills_columns",
        ),
    ]