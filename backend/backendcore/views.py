import json
import pyrebase
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
	

firebaseConfig = {
  "apiKey": "AIzaSyCKVCpJWcxWFDAPERot0F8xCl2aCt_gyw8",
  "authDomain": "gymnotes-d7aac.firebaseapp.com",
  "databaseURL": "https://gymnotes-d7aac-default-rtdb.asia-southeast1.firebasedatabase.app",
  "projectId": "gymnotes-d7aac",
  "storageBucket": "gymnotes-d7aac.appspot.com",
  "messagingSenderId": "853797452616",
  "appId": "1:853797452616:web:7ea4861521c1c69e1e917d",
  "measurementId": "G-CMKV152GVX"
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()
database = firebase.database()

@api_view(["GET"])
@permission_classes([AllowAny])
def firebaseTest(request):
	print("request received!")
	print("Firebase Test")
	name = database.child("Data").child("Name").get().val()
	stack = database.child("Data").child("Stack").get().val()
	framework = database.child("Data").child("Framework").get().val()
	return Response({'Name: '+name+' Stack: '+stack+' Framework: '+framework}, status=200)