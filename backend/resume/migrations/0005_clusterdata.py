# Generated by Django 3.2.7 on 2022-01-23 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("resume", "0004_auto_20220110_2052")]

    operations = [
        migrations.CreateModel(
            name="ClusterData",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("cluster", models.IntegerField()),
                ("x_dim", models.DecimalField(decimal_places=5, max_digits=20)),
                ("y_dim", models.DecimalField(decimal_places=5, max_digits=20)),
                ("z_dim", models.DecimalField(decimal_places=5, max_digits=20)),
                ("track_name", models.CharField(max_length=255)),
                ("artist", models.CharField(max_length=255)),
            ],
        )
    ]
