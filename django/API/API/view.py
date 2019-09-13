from django.http.response import JsonResponse
from json import loads
from rest_framework.views import APIView
from rest_framework.response import Response

#from django.views.decorators.csrf import ensure_csrf_cookie
#@ensure_csrf_cookie
def api(request):
    #print(request.head)
    return JsonResponse({"ame":' elbieh'})


class restView(APIView):
    def get(self,request):
       return Response ({"method":"restAPI"})
    def post(self,request):
       return Response ({"method":"restAPI","name":"sayed elbieh"})


