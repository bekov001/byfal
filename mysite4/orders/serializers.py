from rest_framework.fields import ReadOnlyField
from rest_framework.serializers import ModelSerializer

from .models import Order


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        # owner = ReadOnlyField(source='owner.username')
        fields = ['id', 'created', 'ticker', 'quantity_usdt', 'is_active', 'closed']

