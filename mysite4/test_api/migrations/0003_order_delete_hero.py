# Generated by Django 4.2.1 on 2023-05-06 16:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test_api', '0002_hero_delete_capital_delete_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticker', models.CharField(max_length=10)),
                ('start_price', models.IntegerField()),
                ('quantity_usdt', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Hero',
        ),
    ]
