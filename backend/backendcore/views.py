import json
from django.shortcuts import render, HttpResponse
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def hello_django(request):
	print("request received!")
	return Response({'message: Request successfully returned! Hello Django'}, status=200)

@api_view(["POST"])
@permission_classes([AllowAny])
def IdealWeight(heightdata):
	try:
		height = json.loads(heightdata.body)
		weight = str(height*10)
		return JsonResponse("Ideal weight should be:"+weight+" kg",safe=False)
	except ValueError as e:
		return Response(e.args[0], 400)