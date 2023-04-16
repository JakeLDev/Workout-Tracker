from django.urls import path
from . import views

urlpatterns = [
    path('hellodjango', views.hello_django, name='hello_django'),
    path('idealweight', views.IdealWeight, name='idealweight'),
    path('firebasetest', views.firebaseTest, name='firebasetest')
]