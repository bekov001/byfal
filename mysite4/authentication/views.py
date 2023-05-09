from django.contrib.auth.models import User
from django.core import serializers
from django.http import JsonResponse
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
from .serializers import RegisterSerializer
from rest_framework.generics import CreateAPIView


class RegisterView(CreateAPIView):
    from django.contrib.auth import get_user_model
    User = get_user_model()
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
    #
    # def post(self, ):
    #     pass


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(["GET"])
def get_users(request):
    from django.contrib.auth import get_user_model
    User = get_user_model()
    queryset = User.objects.all()
    # RegisterView.se
    data = serializers.serialize("json", User.objects.all(), fields=["username", "email"])
    return Response(data)