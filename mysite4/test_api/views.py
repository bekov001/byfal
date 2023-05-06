from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework import viewsets, views

from .serializers import HeroSerializer
from .models import Order


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('ticker')
    serializer_class = HeroSerializer


# class ReactView(views.APIView):
#     def get(self, request):
#         output = [
#             {
#                 "employee"
#             } for output in React.objects.all()
#         ]
#         return Response(output)
#
#     def post(self, request):
#         serializer = ReactSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return  Response(serializer.data)