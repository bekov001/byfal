# capitals/serializers.py
from rest_framework import serializers

from .models import Snippet, LANGUAGE_CHOICES, STYLE_CHOICES


#
# class OrderSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Order
#         fields = ('id', 'ticker', 'start_price', 'quantity_usdt')

from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    snippets = serializers.PrimaryKeyRelatedField(many=True, queryset=Snippet.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'snippets']


class SnippetSerializer(serializers.ModelSerializer):


    class Meta:
        model = Snippet
        owner = serializers.ReadOnlyField(source='owner.username')

        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']