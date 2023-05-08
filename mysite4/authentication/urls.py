from django.urls import path
# from . import views


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import RegisterView, get_users
from .views import MyTokenObtainPairView

urlpatterns = [
    # path('', getRoutes),
    path('login/', MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('login/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path("users/", get_users)
]


