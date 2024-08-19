from django.urls import path
from . import views

urlpatterns = [
    path('get-pod-status/<str:pod_name>/', views.getPodStatus, name='get_pod_status'),
    path('get-all-pods/', views.getAllPods, name='get_all_pods'),
]
