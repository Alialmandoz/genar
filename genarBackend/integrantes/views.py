from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import Integrante, Articulo
from .serializers import IntegranteSerializer, ArticuloSerializer

from rest_framework import status


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def integrantes_list(request):
    if request.method == 'GET':
        integrantes = Integrante.objects.all()
        integrante_serializer = IntegranteSerializer(integrantes, many=True)
        return JSONResponse(integrante_serializer.data)
    if request.method == 'POST':
        integrante_data = JSONParser().parse(request)
        integrante_serializer = IntegranteSerializer(data=integrante_data)
        if integrante_serializer.is_valid():
            integrante_serializer.save()
            return JSONResponse(integrante_serializer.data, status=status.HTTP_201_CREATED)

        return JSONResponse(integrante_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def integrante_detail(request, pk):
    try:
        integrante = Integrante.objects.get(pk=pk)
    except Integrante.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        integrante_serializer = IntegranteSerializer(integrante)
        return JSONResponse(integrante_serializer.data)
    elif request.method == 'PUT':
        integrante_data = JSONParser().parse(request)
        integrante_serializer = IntegranteSerializer(Integrante, data=integrante_data)
        if integrante_serializer.is_valid():
            integrante_serializer.save()
            return JSONResponse(integrante_serializer.data)
        return JSONResponse(integrante_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        integrante.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)