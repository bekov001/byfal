from django.urls import path
# from . import views


from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import RegisterView, get_users, LoginUserView, HomeView, LogoutView

# from .views import MyTokenObtainPairView

urlpatterns = [
    # path('', getRoutes),
    # path('loginization/', MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('login/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('register/', RegisterView.as_view(), name='auth_register'),
    path("users/", get_users),
    path("login/", LoginUserView.as_view()),
    path("home/", HomeView.as_view()),
    path('logout/', LogoutView.as_view(), name ='logout')

]


