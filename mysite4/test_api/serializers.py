# capitals/serializers.py
from rest_framework import serializers

from .models import Order


class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'ticker', 'start_price', 'quantity_usdt')