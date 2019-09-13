from rest_framework.pagination import (
    LimitOffsetPagination,
    PageNumberPagination,
    )

class PostLimitPagination(LimitOffsetPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000

class PostPageNumberPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000