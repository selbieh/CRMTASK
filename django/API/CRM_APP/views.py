from django.shortcuts import render
from .models import Clients
from .serializers import ClientsSerializer
from rest_framework import viewsets
from rest_framework.filters import (SearchFilter,
                                    OrderingFilter, )
from . pagination import PostPageNumberPagination, PostLimitPagination
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ClientsView(viewsets.ModelViewSet):
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    pagination_class = PostPageNumberPagination
    #permission_classes = IsAuthenticated