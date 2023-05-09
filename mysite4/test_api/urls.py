# myapi/urls.py
from django.urls import include, path
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    path('snippets/', views.SnippetList.as_view()),
    path('snippets/<int:pk>/', views.SnippetDetail.as_view()),
    path('orders/', views.OrderList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)