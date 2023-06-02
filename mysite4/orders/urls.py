from django.urls import path

from .views import OrderList

urlpatterns = [
path('orders/', OrderList.as_view()),
]
